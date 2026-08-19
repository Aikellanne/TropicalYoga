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
