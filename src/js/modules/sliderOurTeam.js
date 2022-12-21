 export function sliderOurTeam(){
         new Swiper('.ourTime-slider' , {
                slidesPerView: 4,
                spaceBetween: 20,
                loop: true,

                navigation: {
                        nextEl: '.slider-next',
                        prevEl: '.slider-prev'
                },
                breakpoints: {
                        280: {
                                slidesPerView: 1,  
                        },
                        340:{
                                slidesPerView: 1.2, 
                        },
                        480: {
                                slidesPerView: 1.7, 
                        },
                        580: {
                                slidesPerView: 2, 
                        },
                        728: {
                                slidesPerView: 2.5, 
                        },
                        992: {
                                slidesPerView: 3,
                        },
                        1087: {
                                slidesPerView: 3.6,
                        },
                        1170: {
                                slidesPerView: 4,
                        }
                }
        });
}
              
           
