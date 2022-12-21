export function sliderTestimonials() {
    new Swiper('.testimonials-slider ' , { 
        //loop: true,
        
        breakpoints: {
            1640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 2.2,
            },
            1300:{
                slidesPerView: 2.4
            },
            1170: {
                slidesPerView: 2.1,
            },
            1087:{
                slidesPerView: 2.1,
            },
            991.98: {
                slidesPerView: 1.7,
            },
            767.98: {
                slidesPerView: 1.4,
            },
            650:{
                slidesPerView: 1.3,
            },
            280:{
                // centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 2,
            }

        },
        navigation: {
            nextEl: '.sliderT-next',
            prevEl: '.sliderT-prev'
    },
    })
}