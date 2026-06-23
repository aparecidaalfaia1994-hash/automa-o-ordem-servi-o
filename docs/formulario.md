# 📋 Configuração do Google Forms

Lista de campos recomendados para o formulário preenchido pela produção.

| # | Pergunta | Tipo | Obrigatório |
|---|----------|------|-------------|
| 1 | Número da OS | Resposta curta | Sim |
| 2 | Quantidade de caixas | Resposta curta (validação: número) | Sim |
| 3 | Produtos por caixa | Resposta curta | Sim |
| 4 | Peso das caixas (kg) | Resposta curta | Sim |
| 5 | Medidas da caixa (C x L x A em cm) | Resposta curta | Sim |
| 6 | Foto da OS ou da mercadoria | Upload de arquivo (apenas imagem) | Opcional |
| 7 | Observações | Parágrafo | Opcional |

## Por que manter o formulário enxuto

Campos como **nome do cliente**, **endereço de entrega** e **número da nota fiscal** propositalmente **não** entram no formulário da produção. Esses dados costumam não estar disponíveis no chão de fábrica e são preenchidos depois, manualmente, pelo escritório, direto na planilha.

Manter o formulário simples melhora a adoção pela equipe de produção — menos campos, menos fricção, menos chance de erro de preenchimento.

## Conectando ao Google Sheets

1. No formulário, vá em **Respostas**
2. Clique no ícone verde do Google Sheets
3. Escolha **Criar uma nova planilha**
4. As colunas A–G serão preenchidas automaticamente a cada envio

A partir daí, adicione manualmente as colunas extras (cliente, A/C, endereço, NF, status) à direita das colunas do formulário — veja o mapeamento em [`Colunas.exemplo.gs`](../Colunas.exemplo.gs).
