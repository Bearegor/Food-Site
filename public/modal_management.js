function defaultModalState(){
    const Sizes = document.getElementsByClassName("Modal__Options-Sizes")[0]
    const Breads = document.getElementsByClassName("Modal__Options-Breads")[0]
    const Vegies = document.getElementsByClassName("Modal__Options-Vegies")[0]
    const Sauces = document.getElementsByClassName("Modal__Options-Sauces")[0]
    const Fillings = document.getElementsByClassName("Modal__Options-Fillings")[0]
    const Ready = document.getElementsByClassName("Modal__Options-Ready")[0]

    Sizes.style.display = "flex"
    Breads.style.display = "none"
    Vegies.style.display = "none"
    Sauces.style.display = "none"
    Breads.style.display = "none"
    Fillings.style.display = "none"
    Ready.style.display = "none"
}

function openModal(){
    const Modal = document.getElementsByClassName("Modal")[0]
    Modal.style.display = "block"

    defaultModalState()

    const Parent = this.parentNode;
    const Parts = Array.from(Parent.children)

    const Name = Parts[1].innerText
    const Image = Parts[0].src
    const Price = Parts[3].innerText.split(' ')[1]

    const Modal_Name = document.getElementsByClassName("Modal__Order-Name")[0]
    const Modal_Image = document.getElementsByClassName("Modal__Order-Image")[0]
    const Modal_Price = document.getElementsByClassName("Modal__Price")[0]

    Modal_Name.innerText = Name
    Modal_Image.src = Image
    Modal_Price.innerText = `Итого: ${Price} руб.`
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
