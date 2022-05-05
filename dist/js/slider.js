const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    centeredSlides: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});