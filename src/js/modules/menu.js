export function  menu () {
    let btnMenu = document.querySelector(".btn__menu"),
        menuBody = document.querySelector(".menu__body"),
        body = document.querySelector("body"),
        hedList = document.querySelector(".header__list"),
        btnContactBody = document.querySelector(".btn__contact__body");
    
    let menuBodyCL = menuBody.classList,
        bodyCL = body.classList,
        hedListCL = hedList.classList,
        btnContactBodyCL = btnContactBody.classList;

    btnMenu.addEventListener('click' , () => {
        menuBodyCL.toggle("activeMenu");
        bodyCL.toggle("lock");
        hedListCL.toggle("activeMenu");
        btnContactBodyCL.toggle("activeMenu");
    });
    menuBody.addEventListener('click' , () =>{
        menuBodyCL.remove("activeMenu");
        bodyCL.remove("lock");
        hedListCL.remove("activeMenu");
        btnContactBodyCL.remove("activeMenu");
    })
    hedList.addEventListener('click' , () =>{
        menuBodyCL.remove("activeMenu");
        bodyCL.remove("lock");
        hedListCL.remove("activeMenu");
        btnContactBodyCL.remove("activeMenu");
    })
    btnContactBody.addEventListener('click' , () =>{
        menuBodyCL.remove("activeMenu");
        bodyCL.remove("lock");
        hedListCL.remove("activeMenu");
        btnContactBodyCL.remove("activeMenu");
    })

    
    window.addEventListener("resize" , () =>{
        if(window.innerWidth >= 767.98){
            menuBodyCL.remove("activeMenu");
            bodyCL.remove("lock");
            hedListCL.remove("activeMenu");
            btnContactBodyCL.remove("activeMenu");
        }
    })
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    }
}
