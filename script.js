const carrossel = document.querySelector(".depoimentos-carrossel");
const botaoEsquerda = document.querySelector(".seta-esquerda");
const botaoDireita = document.querySelector(".seta-direita");

function pegarDistanciaCard (){
    const card = carrossel.querySelector(".depoimentos-card");
    const estilos = getComputedStyle(carrossel);
    const gap = parseFloat(estilos.gap) || 0;

    return card.offsetWidth + gap; 
}

botaoDireita.addEventListener("click", () => {
    const distancia = pegarDistanciaCard();

    const chegouNoFinal =
        carrossel.scrollLeft + carrossel.clientWidth >=
        carrossel.scrollWidth - 5;

    if (chegouNoFinal) {
        carrossel.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        carrossel.scrollBy({
            left: distancia,
            behavior: "smooth"
        });
    }
});

botaoEsquerda.addEventListener("click", () => {
    const distancia = pegarDistanciaCard();

    if (carrossel.scrollLeft <= 5) {
        carrossel.scrollTo({
            left: carrossel.scrollWidth,
            behavior: "smooth"
        });
    } else {
        carrossel.scrollBy({
            left: -distancia,
            behavior: "smooth"
        });
    }
});


const itensFaq = document.querySelectorAll(".faq-item");

itensFaq.forEach((item) => {
    const pergunta = item.querySelector(".faq-pergunta");

    pergunta.addEventListener("click", () => {
        const estaAberto = item.classList.contains("aberto");

        itensFaq.forEach((outroItem) => {
            outroItem.classList.remove("aberto");
        });

        if (!estaAberto) {
            item.classList.add("aberto");
        }
    });
});

// ========================================
// NEWSLETTER
// ========================================
const formularioNewsletter = document.querySelector(".newsletter");
const emailNewsletter = document.querySelector("#newsletter-email");
const mensagemNewsletter = document.querySelector(".newsletter-mensagem");

formularioNewsletter.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailNewsletter.value.trim();

    emailNewsletter.classList.remove("erro", "sucesso");
    mensagemNewsletter.classList.remove("erro", "sucesso");

    if (email === "") {
        mostrarErroNewsletter("Digite seu e-mail.");
        return;
    }

    if (!emailValido(email)) {
        mostrarErroNewsletter("Digite um e-mail válido.");
        return;
    }

    emailNewsletter.classList.add("sucesso");

    mensagemNewsletter.textContent =
        "Pronto! Você está na nossa lista.";

    mensagemNewsletter.classList.add("sucesso");

    formularioNewsletter.reset();
});

function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mostrarErroNewsletter(mensagem) {
    emailNewsletter.classList.add("erro");

    mensagemNewsletter.textContent = mensagem;
    mensagemNewsletter.classList.add("erro");
}
