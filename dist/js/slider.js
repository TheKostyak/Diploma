const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
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
            centeredSlides: false,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
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





    // Default parameters
    // slidesPerView: 1,
    // spaceBetween: 10,
    // // Responsive breakpoints
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //         slidesPerView: 2,
    //         spaceBetween: 30
    //     },
    //     768: {
    //         slidesPerView: 3,
    //     },
    // }
});