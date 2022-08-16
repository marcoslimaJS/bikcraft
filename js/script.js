// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if(url.includes(href)) {
    link.classList.add("ativo")
  }
}

links.forEach(ativarLink);


// Ativar itemns do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto (parametro) {
  const elemento = document.getElementById(parametro)
  if(elemento) {
    elemento.checked = true
  }
  
  console.log(elemento)
}

parametros.forEach(ativarProduto);


// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(e) {
  const pergunta = e.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo")
  pergunta.setAttribute("aria-expanded", ativo)
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagem img");
const galeriaContainer = document.querySelector(".bicicleta-imagem");

function trocarImagem(e) {
  const img = e.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches
  if(media) {
    galeriaContainer.prepend(img)
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);


// Animação
if(window.SimpleAnime) {
  new SimpleAnime();
}


// Menu Mobile Hambuguer 
const btnMobile = document.getElementById('btn-mobile')

const menu = document.getElementById('menu')

function toggleMenu (event) {
  if(event.type === 'touchstart') {
    event.preventDefault()
  }
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')

  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)

  if(active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }

  const body = document.querySelector('body')
  if(active) {
    body.style.overflowY = "hidden"
  }
  else {
    body.style.overflowY = "initial"
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);