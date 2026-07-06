---
name: screenshot-review
description: Compara visualmente o site novo (local ou publicado) com o site original da Apex Wash no Google Sites, para revisar conteúdo/textos e identificar o que ainda falta migrar. Use quando o usuário pedir para "comparar com o site antigo", "revisar o que falta" ou "conferir os textos do site original".
---

Ao ser invocado:

1. Abra o site original em uma aba do Chrome: https://sites.google.com/view/apex-wash/home?authuser=0
2. Use `get_page_text` para extrair o texto da página original (e das subpáginas relevantes, se houver navegação).
3. Abra o site novo (local, ex: `index.html` aberto via `file://`, ou a URL publicada no GitHub Pages) em outra aba.
4. Compare o conteúdo textual entre as duas versões e relate ao usuário:
   - Textos do site original que ainda não aparecem no site novo.
   - Seções/páginas do site original que ainda faltam ser criadas.
5. Não copie o design/HTML do site original — o objetivo é migrar apenas texto e informações (endereço, telefone, serviços, preços etc.), com um layout novo e melhorado.
6. Apresente o resultado como uma lista objetiva do que falta migrar, não como um relatório longo.
