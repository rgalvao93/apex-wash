# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o projeto

Reconstrução do site institucional da Apex Wash, hoje publicado em Google Sites:
https://sites.google.com/view/apex-wash/home?authuser=0

A Apex Wash presta serviços de **estética e higienização de estofados** (sofás, poltronas),
**colchões** e **interior automotivo** (auto detailing) — não é lavagem externa de veículos.

O objetivo **não é clonar** o site atual — é melhorar o design, a estrutura e a experiência.
Do site atual, reaproveitar **apenas os textos/conteúdo**, não o layout ou visual.

### Seções do site atual (referência de conteúdo)

- **Sobre** — "Cuidado que transforma o seu ambiente". Abordagem personalizada, alta performance, ecossistema de saúde.
- **Estofados** — Estética de estofados: proteção de fibras, revitalização visual.
- **Colchões** — Higienização de colchões: eliminação de ácaros, remoção de odores, preservação do sono.
- **Automotivo** — Apex Auto Detailing: aspiração & extração, sanitização técnica, hidratação de couro.
- **Contato** — WhatsApp (11) 92544-4435, e-mail contato.apexwash@gmail.com.

## Stack

- HTML/CSS/JS estático, sem framework/build step.
- Hospedagem: GitHub Pages, deploy automático a partir da branch `main` (ver `.github/workflows/deploy.yml`).
- Bom para SEO: conteúdo já vem pronto no HTML, sem depender de JS para renderizar.

## Estrutura de pastas

- `index.html` (e demais páginas na raiz)
- `css/` — estilos
- `js/` — scripts
- `assets/img/` — imagens e logos (ver também `/home/rodgallvao/Downloads/export-logos` e `/home/rodgallvao/Imagens` como possíveis fontes de assets do usuário)

## Convenções

- Design deve ser original e melhorado em relação ao site atual — não copiar o visual do Google Sites.
- Extrair textos do site atual como referência de conteúdo (não fazer scraping automatizado sem antes revisar com o usuário).
- Manter HTML semântico e acessível (facilita SEO e leitores de tela).
- **Qualquer trabalho de design (layout, paleta, tipografia, componentes novos) deve usar a skill `frontend-design`.**

## Paleta de marca

Extraída do logo oficial da Apex Wash (selo circular, fundo branco, texto preto):

- Azul (cor dominante do selo e do ícone do sofá): `#1B6FB0` (uso funcional/texto), `#2A9BE0` (tom decorativo mais claro)
- Dourado: `#E2960A` (funcional), `#FAAA14` (decorativo)
- Vermelho: `#D6461C`
- Verde: `#2F8A16`

O selo original em si (clip-art com ícones de limpeza — spray, aspirador, rodo, escova) **não deve ser usado como imagem no layout** — destoa do sistema visual mais editorial do site. Usar apenas as cores extraídas dele; o wordmark/ícone do cabeçalho é uma peça nova, desenhada para este redesign.

## Deploy

Push na branch `main` aciona o workflow do GitHub Pages (`.github/workflows/deploy.yml`). Não há passo de build — os arquivos estáticos são publicados diretamente.
