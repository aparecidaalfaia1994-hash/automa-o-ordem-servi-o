# 🏷️ Automação de Ordem de Serviço (OS)

Automação gratuita do fluxo de Ordem de Serviço — da finalização na produção até a geração da etiqueta de envio — usando **Google Forms, Google Sheets e Google Apps Script**.

Criado para resolver um problema comum em pequenas e médias empresas: processos de OS que dependem de papel impresso, fotos enviadas por WhatsApp e digitação manual de dados.

## 📋 O problema

Fluxo tradicional:

```
OS impressa → entregue à produção → produção fotografa
a OS finalizada → envia foto por WhatsApp → escritório lê
a foto e digita os dados manualmente → emite NF e etiqueta
```

Problemas: fotos ilegíveis, retrabalho, erros de transcrição, nenhum histórico centralizado.

## ✅ A solução

```
OS criada → produção preenche formulário no celular →
dados organizados automaticamente na planilha →
notificação automática por e-mail → escritório completa
dados de cliente/NF → etiqueta gerada com 1 clique
```

## 🛠️ Stack

- **Google Forms** — captura de dados da produção, sem necessidade de app
- **Google Sheets** — banco de dados central, já validado e estruturado
- **Google Apps Script** — automação de notificações e geração de etiqueta

100% gratuito, sem necessidade de servidor ou hospedagem.

## 🚀 Como usar

### 1. Crie o formulário

Veja [`docs/formulario.md`](docs/formulario.md) para a lista completa de campos recomendados.

Conecte o formulário a uma nova planilha Google Sheets (Respostas → ícone do Sheets).

### 2. Configure o script

1. Na planilha, vá em **Extensões → Apps Script**
2. Copie o conteúdo de [`Codigo.gs`](Codigo.gs) para o editor
3. Copie [`Config.exemplo.gs`](Config.exemplo.gs) → renomeie para `Config.gs` → preencha com seus dados
4. Copie [`Colunas.exemplo.gs`](Colunas.exemplo.gs) → renomeie para `Colunas.gs` → ajuste os números de coluna conforme sua planilha
5. Salve o projeto

### 3. Ative a automação

Recarregue a planilha. Um menu **🏷️ Etiquetas OS** vai aparecer. Clique em **Instalar automação de notificação** uma única vez e autorize o acesso quando solicitado.

### 4. Use no dia a dia

- A produção preenche o formulário pelo celular a cada OS finalizada
- Você recebe um e-mail automático com os dados
- Complete manualmente cliente, A/C, endereço e NF na planilha
- Selecione a linha e use o menu **Gerar etiqueta** para enviar a etiqueta por e-mail

## 📁 Estrutura do projeto

```
.
├── Codigo.gs                  # Lógica principal (notificação + etiqueta)
├── Config.exemplo.gs          # Template de configuração (e-mail, nome da empresa)
├── Colunas.exemplo.gs         # Template de mapeamento de colunas
└── docs/
    └── formulario.md          # Guia de campos do Google Forms
```

## ⚠️ Segurança

Nunca suba `Config.gs` ou `Colunas.gs` preenchidos com dados reais para um repositório público. Os arquivos `.exemplo.gs` existem justamente para isso — copie, renomeie e preencha localmente, fora do controle de versão público.

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas via issues ou pull requests. Ideias futuras:

- [ ] Geração de etiqueta em PDF formatado (Google Docs template)
- [ ] Integração direta com sistemas de NFe
- [ ] Suporte a múltiplos destinatários de notificação

## 📄 Licença

MIT — sinta-se livre para usar, adaptar e distribuir.

---

Desenvolvido para resolver um problema real de operação. Se ajudou você, deixe uma ⭐.


Desenvolvido por Aparecida Vieira (https://www.linkedin.com/in/aparecidavalfaia)
