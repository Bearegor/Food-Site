function ChangeQuantity(){
    const Option = this.innerText
    console.log(Option)
    const Display = this.parentNode.children[1]
    const Quantity = Number(Display.innerText);
    let NewQuantity = Quantity;
    switch (Option){
        case '+':
            if(Quantity < 100){
                NewQuantity = Quantity + 1
            }
            break;
        case '-':
            if(Quantity > 1){
                NewQuantity = Quantity - 1
            }
            break;
        default:
            NewQuantity = Quantity
            break;
    }
    Display.innerText = NewQuantity
}

const IncreaseFoodBtns = Array.from(document.getElementsByClassName("Food__Increase-Quantity"))
const IncreaseModalBtns = Array.from(document.getElementsByClassName("Modal__Increase-Quantity"))
const IncreaseBtns = IncreaseFoodBtns.concat(IncreaseModalBtns)
IncreaseBtns.forEach((element, index) => {
        element.addEventListener('click', ChangeQuantity)
})

const DecreaseFoodBtns = Array.from(document.getElementsByClassName("Food__Decrease-Quantity"))
const DecreaseModalBtns = Array.from(document.getElementsByClassName("Modal__Decrease-Quantity"))
const DecreaseBtns = DecreaseFoodBtns.concat(DecreaseModalBtns)
DecreaseBtns.forEach((element, index) => {
        element.addEventListener('click', ChangeQuantity)
})

