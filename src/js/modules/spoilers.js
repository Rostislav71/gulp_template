export function spoilers() {

    let spoilersItem = document.querySelectorAll(".faq__spoilers__item");
    let spoilersContent = document.querySelectorAll(".spoiler__subtitle");
    let btn = document.querySelectorAll(".btn__arrow");
 
    spoilersItem.forEach((item) => {
        item.addEventListener('click' , (e) => {
            
            spoilersItem.forEach((sect) =>{
                sect.classList.remove("open")
                
            })
            
            e.target.closest(".faq__spoilers__item").classList.add("open");
        })
    })
}