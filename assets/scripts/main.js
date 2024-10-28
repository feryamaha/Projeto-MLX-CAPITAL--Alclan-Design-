document.addEventListener('DOMContentLoaded', function () {
    const scrollerContent = document.querySelector('.scroller-content');
    const contentList = [
        { tag: 'h3', text: 'Expertise no setor de saúde não assistencial' },
        { tag: 'h5', text: 'MLX Capital' },
        { tag: 'h3', text: 'Histórico de transações' },
        { tag: 'h5', text: 'MLX Capital' },
        { tag: 'h3', text: 'Rede de relacionamento com stakeholders relevantes' },
        { tag: 'h5', text: 'MLX Capital' }
    ];

    function insertContent() {
        contentList.forEach(item => {
            const element = document.createElement(item.tag);
            element.textContent = item.text;
            if (item.tag === 'h5') {
                const wrapper = document.createElement('div');
                wrapper.classList.add('content-scroller-h5');
                wrapper.appendChild(element);
                scrollerContent.appendChild(wrapper);
            } else {
                scrollerContent.appendChild(element);
            }
        });
    }

    insertContent();
    insertContent();

    let scrollAmount = 5;
    const scrollSpeed = 2;
    const itemWidth = scrollerContent.scrollWidth / contentList.length / 2;

    function scrollContinuously() {
        scrollAmount -= scrollSpeed;
        if (Math.abs(scrollAmount) >= itemWidth) {
            scrollAmount = 0;
            scrollerContent.appendChild(scrollerContent.firstElementChild); // Move o primeiro item para o fim
        }
        scrollerContent.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scrollContinuously);
    }

    scrollContinuously();
});








