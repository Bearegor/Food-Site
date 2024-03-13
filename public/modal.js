function openModal(){
    const Modal = document.getElementsByClassName("Modal")[0]
    const Sizes = document.getElementsByClassName("Modal__Options-Sizes")[0]
    const Breads = document.getElementsByClassName("Modal__Options-Breads")[0]
    const Vegies = document.getElementsByClassName("Modal__Options-Vegies")[0]
    const Sauces = document.getElementsByClassName("Modal__Options-Sauces")[0]
    const Fillings = document.getElementsByClassName("Modal__Options-Fillings")[0]
    const Ready = document.getElementsByClassName("Modal__Options-Ready")[0]

    Modal.style.display = "block"
    Sizes.style.display = "flex"
    Breads.style.display = "none"
    Vegies.style.display = "none"
    Sauces.style.display = "none"
    Breads.style.display = "none"
    Fillings.style.display = "none"
    Ready.style.display = "none"
}

function closeModal(){
    const Modal = document.getElementsByClassName("Modal")[0]
    Modal.style.display = "none"
}

function moveInModal(direction){
    const Sizes = document.getElementsByClassName("Modal__Options-Sizes")[0]
    const Breads = document.getElementsByClassName("Modal__Options-Breads")[0]
    const Vegies = document.getElementsByClassName("Modal__Options-Vegies")[0]
    const Sauces = document.getElementsByClassName("Modal__Options-Sauces")[0]
    const Fillings = document.getElementsByClassName("Modal__Options-Fillings")[0]
    const Ready = document.getElementsByClassName("Modal__Options-Ready")[0]

    const Options = [Sizes, Breads, Vegies, Sauces, Fillings, Ready]
    let CurrentOption;

    Options.forEach((element, index) => {
        if(element.style.display !== "none"){
            CurrentOption = index;
        }
    })

    switch(direction){
        case "right":
            if(CurrentOption + 1 < Options.length){
                Options[CurrentOption].style.display = 'none'
                Options[CurrentOption + 1].style.display = 'flex'
            }
            break;
        case "left":
            if(CurrentOption - 1 >= 0){
                Options[CurrentOption].style.display = 'none'
                Options[CurrentOption - 1].style.display = 'flex'
            }
            break;
    }
}

const ModalBtns = Array.from(document.getElementsByClassName("Food__Move-To-Modal"))
ModalBtns.forEach((element, index) => {
    element.addEventListener('click', openModal)
});

document.getElementsByClassName("Modal__Move-Right")[0].addEventListener('click', () =>{
    moveInModal('right')
})

document.getElementsByClassName("Modal__Move-Left")[0].addEventListener('click', () =>{
    moveInModal('left')
})

document.getElementsByClassName("Modal__Close-Btn")[0].addEventListener('click', closeModal)




// window.onload = (event) => {
//     const Sizes = document.getElementsByClassName("Modal__Options-Sizes")[0]
//     const Breads = document.getElementsByClassName("Modal__Options-Breads")[0]
//     const Vegies = document.getElementsByClassName("Modal__Options-Vegies")[0]
//     const Sauces = document.getElementsByClassName("Modal__Options-Sauces")[0]
//     const Fillings = document.getElementsByClassName("Modal__Options-Fillings")[0]
//     const Ready = document.getElementsByClassName("Modal__Options-Ready")[0]

//     const Next_Btn = document.getElementsByClassName("Modal__Move-Right")[0]
//     const Previous_Btn = document.getElementsByClassName("Modal__Move-Left")[0]

//     console.log(Next_Btn)

//     Next_Btn.addEventListener("click", () => {
//         Sizes.style.display = "none"
//         console.log("Сработало")
//     })

//     console.log("Загружен модуль Modal");
// };



