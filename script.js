document.addEventListener('DOMContentLoaded', () => {
    function atualizarContador() {
        const dataLancamento = new Date("2025-07-01T00:00:00");
        const agora = new Date(); 

        const diferenca = dataLancamento - agora; 

        if (diferenca <= 0) {
            document.getElementById("contador").innerText = "LANÇADO!";
            return; 
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        document.getElementById("contador").innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    setInterval(atualizarContador, 1000);

    atualizarContador();


    const carouselTrack = document.querySelector('.carousel-track');
    const carouselSlides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0; 
    function moveToSlide() {
        const slideWidth = carouselSlides[0].offsetWidth;
        carouselTrack.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';
    }

    window.addEventListener('resize', () => {
        moveToSlide(); 
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < carouselSlides.length - 1) { 
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        moveToSlide();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) { 
            currentIndex--;
        } else {
            currentIndex = carouselSlides.length - 1; 
        }
        moveToSlide();
    });

    moveToSlide();
});