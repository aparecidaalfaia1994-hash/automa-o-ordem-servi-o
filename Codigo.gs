/**
 * Automação de Ordem de Serviço (OS)
 * ------------------------------------------------
 * Gera notificação automática por e-mail e etiqueta
 * de envio a partir de um formulário Google Forms
 * conectado a uma planilha Google Sheets.
 *
 * Como usar:
 * 1. Copie este arquivo para o Apps Script da sua planilha
 *    (Extensões → Apps Script)
 * 2. Preencha as constantes em CONFIG.gs (veja esse arquivo)
 * 3. Ajuste o mapeamento de colunas em COLUNAS.gs se sua
 *    planilha tiver uma ordem diferente
 * 4. Execute a função instalarGatilho() uma vez para ativar
 *    a automação
 *
 * Licença: MIT
 */

function gerarEtiqueta(row) {
  var sheet = SpreadsheetApp.getActiveSheet();

  // ── Dados preenchidos pela produção (via formulário) ──
  var os      = sheet.getRange(row, COLUNAS.NUMERO_OS).getValue();
  var caixas  = sheet.getRange(row, COLUNAS.QTD_CAIXAS).getValue();
  var produto = sheet.getRange(row, COLUNAS.PRODUTO).getValue();
  var peso    = sheet.getRange(row, COLUNAS.PESO).getValue();
  var medidas = sheet.getRange(row, COLUNAS.MEDIDAS).getValue();
  var obs     = sheet.getRange(row, COLUNAS.OBSERVACOES).getValue();

  // ── Dados preenchidos manualmente pelo escritório ─────
  var cliente  = sheet.getRange(row, COLUNAS.CLIENTE).getValue();
  var ac       = sheet.getRange(row, COLUNAS.AC).getValue();
  var local    = sheet.getRange(row, COLUNAS.LOCAL_ENTREGA).getValue();
  var endereco = sheet.getRange(row, COLUNAS.ENDERECO).getValue();
  var nf       = sheet.getRange(row, COLUNAS.NOTA_FISCAL).getValue();

  // ── Validação mínima ───────────────────────────────────
  if (!cliente || !nf) {
    SpreadsheetApp.getUi().alert(
      "⚠️ Preencha Cliente e Nota Fiscal antes de gerar a etiqueta."
    );
    return;
  }

  // ── Monta o corpo da etiqueta ──────────────────────────
  var etiqueta =
    "════════════════════════════════\n" +
    CONFIG.NOME_EMPRESA + "\n" +
    "════════════════════════════════\n\n" +
    "CLIENTE: " + cliente + "\n" +
    "A/C: "     + (ac || "—") + "\n\n" +
    "────────────────────────────────\n" +
    caixas + " Caixas  |  " + produto + "\n" +
    "Peso/cx: " + peso + " kg   |   Medidas: " + medidas + "\n" +
    "────────────────────────────────\n\n" +
    "NOTA FISCAL: " + nf + "\n\n" +
    "LOCAL DE ENTREGA: " + (local || "—") + "\n" +
    (endereco || "—") + "\n\n" +
    (obs ? "OBS: " + obs + "\n" : "");

  // ── Envia por e-mail ────────────────────────────────────
  MailApp.sendEmail({
    to:      CONFIG.EMAIL_DESTINO,
    subject: "Etiqueta OS " + os + " — " + cliente + " — NF " + nf,
    body:    etiqueta
  });

  // ── Marca como concluído ───────────────────────────────
  sheet.getRange(row, COLUNAS.STATUS).setValue("✅ Etiqueta gerada");
  SpreadsheetApp.getUi().alert("✅ Etiqueta gerada e enviada!");
}

/**
 * Envia notificação automática quando a produção
 * finaliza uma OS pelo formulário.
 */
function notificarNovaOS(e) {
  var sheet = e.source.getActiveSheet();
  var row   = e.range.getRow();

  var os      = sheet.getRange(row, COLUNAS.NUMERO_OS).getValue();
  var caixas  = sheet.getRange(row, COLUNAS.QTD_CAIXAS).getValue();
  var produto = sheet.getRange(row, COLUNAS.PRODUTO).getValue();
  var peso    = sheet.getRange(row, COLUNAS.PESO).getValue();
  var medidas = sheet.getRange(row, COLUNAS.MEDIDAS).getValue();
  var obs     = sheet.getRange(row, COLUNAS.OBSERVACOES).getValue();

  var corpo =
    "Nova OS finalizada pela produção.\n\n" +
    "OS: " + os + "\n\n" +
    "Caixas: "      + caixas  + "\n" +
    "Produto/caixa: " + produto + "\n" +
    "Peso/caixa: "  + peso    + " kg\n" +
    "Medidas: "     + medidas + "\n\n" +
    "Observações: " + (obs || "Nenhuma");

  MailApp.sendEmail(CONFIG.EMAIL_DESTINO, "OS Finalizada: " + os, corpo);
}

/**
 * Instala o gatilho que dispara notificarNovaOS()
 * automaticamente a cada envio do formulário.
 * Execute esta função manualmente UMA VEZ.
 */
function instalarGatilho() {
  ScriptApp.newTrigger("notificarNovaOS")
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onFormSubmit()
    .create();
  SpreadsheetApp.getUi().alert("✅ Gatilho de notificação instalado!");
}

/**
 * Cria o menu personalizado na planilha.
 * Executado automaticamente quando a planilha é aberta.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("🏷️ Etiquetas OS")
    .addItem("Gerar etiqueta (linha selecionada)", "gerarDaLinhaAtual")
    .addSeparator()
    .addItem("Instalar automação de notificação", "instalarGatilho")
    .addToUi();
}

function gerarDaLinhaAtual() {
  var row = SpreadsheetApp.getActiveSheet().getActiveCell().getRow();
  if (row <= 1) {
    SpreadsheetApp.getUi().alert("Selecione uma linha de dados, não o cabeçalho.");
    return;
  }
  gerarEtiqueta(row);
}
