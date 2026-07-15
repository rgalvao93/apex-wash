# TASKS.md

Backlog de tarefas do redesign da Apex Wash. Atualizar conforme o trabalho avança.

## Em aberto

- [ ] Revisar e commitar as mudanças pendentes no working tree:
  - `CLAUDE.md` — atualização da paleta de marca ("Água limpa")
  - `css/style.css` — ajustes de estilo (141 linhas alteradas)
  - `index.html` — ajustes de conteúdo/markup (37 linhas alteradas)
  - `assets/img/og-image.png` — nova versão da imagem
  - `assets/img/hero-banner.jpg` — novo asset, ainda não versionado
- [ ] Decidir o que fazer com `GEMINI.md` (arquivo vazio, não rastreado, na raiz) — remover ou preencher
- [ ] Rodar a skill `screenshot-review` para comparar o site atual com o Google Sites original e conferir se todo o conteúdo de texto foi migrado
- [ ] Validar acessibilidade e semântica do HTML (landmarks, contraste de cores da paleta fria, `alt` de imagens)
- [ ] Conferir SEO local (meta tags, sitemap.xml, robots.txt) após as mudanças de conteúdo

## Concluído (referência)

- [x] Seções de conteúdo real: sobre, estofados, colchões, automotivo, contato (commit `8489c7b`)
- [x] Paleta de marca extraída do logo oficial + regra de skill de design (commit `50421c3`)
- [x] Redesign de seções com fotografia real, SEO local e prova social (commit `c7182bb`)
- [x] Seções de processo, FAQ, regiões e footer completo (commit `a121157`, PR #1)
