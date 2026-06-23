/**
 * MAPEAMENTO DE COLUNAS
 * ------------------------------------------------
 * Ajuste os números conforme a ordem das colunas
 * na SUA planilha. Os números abaixo são exemplo
 * (1 = coluna A, 2 = coluna B, e assim por diante).
 *
 * Colunas A–H normalmente vêm do Google Forms
 * (preenchidas pela produção).
 * Colunas I em diante normalmente são preenchidas
 * manualmente pelo escritório.
 */

var COLUNAS = {
  // Preenchidos pela produção via formulário
  TIMESTAMP:     1,  // A
  NUMERO_OS:     2,  // B
  QTD_CAIXAS:    3,  // C
  PRODUTO:       4,  // D
  PESO:          5,  // E
  MEDIDAS:       6,  // F
  FOTO:          7,  // G
  OBSERVACOES:   8,  // H

  // Preenchidos manualmente pelo escritório
  CLIENTE:       9,  // I
  AC:            10, // J
  LOCAL_ENTREGA: 11, // K
  ENDERECO:      12, // L
  NOTA_FISCAL:   13, // M

  // Controle interno (preenchido pelo próprio script)
  STATUS:        14  // N
};
