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

## Paleta de marca — "Água limpa" (fria/higiênica)

Ancorada no logo oficial (selo circular sobre **fundo branco**, azul dominante, quatro
plaquinhas de ferramenta verde/âmbar/azul/vermelho). O sistema é **frio e claro** — não
usar bege/creme quente (dá cara de site antigo e briga com o branco do logo).

Fundo e texto (frios):
- Papel (fundo): `#F5F9FC` · Névoa (seções alternadas, `--mist`): `#E7F0F8` · Cards: `#FFFFFF`
- Tinta (texto): `#10273A` (navy frio) · Texto suave: `#46606F`

Azul (cor líder — o sofá e o anel do logo):
- `#0F6FB8` (primário: botões, links, eyebrows) · `#45ABE6` (decorativo, o anel) · `#0A4E86` (hover / faixa CTA)

Acentos das quatro plaquinhas (uso pontual — passos do processo, dots de cards):
- Verde `#2FA13B` (spray) · Âmbar `#F2A31C` (aspirador, token `--gold`) · Vermelho `#E1462A` (escova)

Fonte da verdade das cores: `:root` em `css/style.css`. O selo original (clip-art) **não
deve ser usado como imagem** no layout; o wordmark/ícone do cabeçalho é peça nova. A
assinatura (painel de fibra) vai de **cinza opaco → azul** = "sujo → limpo".

## Deploy

Push na branch `main` aciona o workflow do GitHub Pages (`.github/workflows/deploy.yml`). Não há passo de build — os arquivos estáticos são publicados diretamente.
