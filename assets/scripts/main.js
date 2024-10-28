document.addEventListener('DOMContentLoaded', function () {
    const scrollerContent = document.querySelector('.scroller-content');
    let scrollPosition = 0;
    const scrollAmount = 200; // Quantidade de pixels que será rolada a cada vez

    function scrollLeft() {
        scrollPosition += scrollAmount;
        if (scrollPosition > 0) {
            scrollPosition = 0; // Evita rolar para além do início
        }
        scrollerContent.style.transform = `translateX(${scrollPosition}px)`;
    }

    function scrollRight() {
        const maxScroll = scrollerContent.scrollWidth - scrollerContent.offsetWidth;
        scrollPosition -= scrollAmount;
        if (Math.abs(scrollPosition) > maxScroll) {
            scrollPosition = -maxScroll; // Evita rolar para além do fim
        }
        scrollerContent.style.transform = `translateX(${scrollPosition}px)`;
    }

    // Adicione eventos para rolar à esquerda e à direita
    // Por exemplo: você pode adicionar botões e seus eventos de clique para chamar scrollLeft e scrollRight
    document.querySelector('.scroll-left-button').addEventListener('click', scrollLeft);
    document.querySelector('.scroll-right-button').addEventListener('click', scrollRight);
});
