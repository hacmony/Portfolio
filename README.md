# Portfólio — Hacmony A. Santos Jr.

Site estático feito em HTML, CSS e JavaScript para publicação no GitHub Pages.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie `index.html`, `style.css` e `script.js`.
3. No repositório, abra **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve e aguarde o GitHub publicar o site.

## Como adicionar as imagens reais dos projetos

Crie uma pasta:

`images/`

Depois coloque nela as imagens dos seus trabalhos e altere, no `index.html`, cada bloco:

`<div class="project-image placeholder image-a">`

para, por exemplo:

`<div class="project-image"><img src="images/animação-logistica.jpg" alt="Animação publicitária para empresa de logística"></div>`

No CSS, adicione:

`.project-image img { width: 100%; height: 100%; object-fit: cover; display: block; }`

O conteúdo textual foi baseado no PDF do portfólio fornecido.
