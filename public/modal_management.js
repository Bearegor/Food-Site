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

    const Options = Array.from(document.getElementsByClassName("Modal__Option"))
    Options.forEach((element) =>{
        element.removeAttribute("style")
        element.removeAttribute("id")
    })

    document.getElementsByClassName("Modal__Order-Size")[0].innerText = "Размер: Не выбрано"
    document.getElementsByClassName("Modal__Order-Bread")[0].innerText = "Хлеб: Не выбрано"
    document.getElementsByClassName("Modal__Order-Vegie")[0].innerText = "Овощи: Не выбрано"
    document.getElementsByClassName("Modal__Order-Sauce")[0].innerText = "Соус: Не выбрано"
    document.getElementsByClassName("Modal__Order-Filling")[0].innerText = "Начинка: Не выбрано"
    document.getElementsByClassName("Modal__Order-Quantity-Number")[0].innerText = '1'
}

function openModal(){
    const Modal = document.getElementsByClassName("Modal")[0]
    Modal.style.display = "block"
    const Options = Array.from(document.getElementsByClassName("Modal__Page-Name"))
    Options.forEach((element, index) =>{
        element.removeAttribute("style")
        if(index === 0){
            element.style.background = 'rgb(252, 104, 78)'
            element.style.color = 'white'
        }
    })

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

    const Names = Array.from(document.getElementsByClassName("Modal__Page-Name"))
    Names.forEach((element) =>{
        element.removeAttribute("style")
        // element.style.background = 'white'
        // element.style.color = 'rgb(97, 97, 97)'
    })

    switch(direction){
        case "right":
            if(CurrentOption + 1 < Options.length){
                Options[CurrentOption].style.display = 'none'
                Options[CurrentOption + 1].style.display = 'flex'
                Names[CurrentOption + 1].style.background = 'rgb(252, 104, 78)'
                Names[CurrentOption + 1].style.color = 'white'
            }
            else{
                Names[CurrentOption].style.background = 'rgb(252, 104, 78)'
                Names[CurrentOption].style.color = 'white'
            }
            break;
        case "left":
            if(CurrentOption - 1 >= 0){
                Options[CurrentOption].style.display = 'none'
                Options[CurrentOption - 1].style.display = 'flex'
                Names[CurrentOption - 1].style.background = 'rgb(252, 104, 78)'
                Names[CurrentOption - 1].style.color = 'white'
            }
            else{
                Names[CurrentOption].style.background = 'rgb(252, 104, 78)'
                Names[CurrentOption].style.color = 'white'
            }
            break;
    }
}

function hideOthers(chosen){
    const Sizes = document.getElementsByClassName("Modal__Options-Sizes")[0]
    const Breads = document.getElementsByClassName("Modal__Options-Breads")[0]
    const Vegies = document.getElementsByClassName("Modal__Options-Vegies")[0]
    const Sauces = document.getElementsByClassName("Modal__Options-Sauces")[0]
    const Fillings = document.getElementsByClassName("Modal__Options-Fillings")[0]
    const Ready = document.getElementsByClassName("Modal__Options-Ready")[0]
    const Options = [Sizes, Breads, Vegies, Sauces, Fillings, Ready]
    const Names = document.getElementsByClassName("Modal__Page-Name")

    Options.forEach((element, index) => {
        Names[index].removeAttribute("style")
        // Names[index].style.background = 'white'
        // Names[index].style.color = 'rgb(97, 97, 97)'
        element.style.display = 'none'
    })

    switch (chosen){
        case 'Sizes':
            Names[0].style.background = 'rgb(252, 104, 78)'
            Names[0].style.color = 'white'
            Sizes.style.display = 'flex';
            break;
        case 'Breads':
            Names[1].style.background = 'rgb(252, 104, 78)'
            Names[1].style.color = 'white'
            Breads.style.display = 'flex';
            break;
        case 'Vegies':
            Names[2].style.background = 'rgb(252, 104, 78)'
            Names[2].style.color = 'white'
            Vegies.style.display = 'flex';
            break;
        case 'Sauces':
            Names[3].style.background = 'rgb(252, 104, 78)'
            Names[3].style.color = 'white'
            Sauces.style.display = 'flex';
            break;
        case 'Fillings':
            Names[4].style.background = 'rgb(252, 104, 78)'
            Names[4].style.color = 'white'
            Fillings.style.display = 'flex';
            break;
        case 'Ready':
            Names[5].style.background = 'rgb(252, 104, 78)'
            Names[5].style.color = 'white'
            Ready.style.display = 'flex';
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


//Выбор перехода по меню
document.getElementsByClassName("Modal__Page-Name")[0].addEventListener('click', ()=>{
    hideOthers('Sizes')
})
document.getElementsByClassName("Modal__Page-Name")[1].addEventListener('click', ()=>{
    hideOthers('Breads')
})
document.getElementsByClassName("Modal__Page-Name")[2].addEventListener('click', ()=>{
    hideOthers('Vegies')
})
document.getElementsByClassName("Modal__Page-Name")[3].addEventListener('click', ()=>{
    hideOthers('Sauces')
})
document.getElementsByClassName("Modal__Page-Name")[4].addEventListener('click', ()=>{
    hideOthers('Fillings')
})
document.getElementsByClassName("Modal__Page-Name")[5].addEventListener('click', ()=>{
    hideOthers('Ready')
})
