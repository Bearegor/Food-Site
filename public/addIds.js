function CalcTotal(){
    console.log("3")
    const Shopcart = document.getElementsByClassName("Shopcart__List")[0]
    const Entries = Array.from(Shopcart.children)
    let Total = 0;
    Entries.forEach((element) => {
        const Parts = Array.from(element.children)
        const Price = Number(Parts[1].innerText)
        Total += Price
    })
    
    const TotalCount = document.getElementsByClassName("Shopcart__Total-Count")[0]
    TotalCount.innerText = `Всего: ${Total} руб.`
}

function CreateOrder(){
    const Parent = this.parentNode;
    const Name = Parent.children[1].innerText
    const Price = Parent.children[3].innerText.split(' ')[1]
    const Quantity = Parent.children[5].children[1].innerText
    const Details = {
        name: Name,
        price: Price,
        quantity: Quantity
    }    
    console.log("1")
    AddOrder(Name, Price, Quantity)
}

function AddOrder(Name, Price, Quantity){
    const OrderElement = document.createElement("div")
    OrderElement.classList.add("Shopcart__List-Element")

    const NameElement = document.createElement("p-l")
    NameElement.innerText = Name

    const PriceElement = document.createElement("p")
    PriceElement.innerText = Price
    PriceElement.style.display = 'none'

    const QuantityElement = document.createElement("p-r")
    QuantityElement.innerText = Quantity

    OrderElement.appendChild(NameElement)
    OrderElement.appendChild(PriceElement)
    OrderElement.appendChild(QuantityElement)

    const ShopcartList = document.getElementsByClassName("Shopcart__List")[0]
    ShopcartList.appendChild(OrderElement)
    console.log("2")
    CalcTotal()
}

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



window.onload = (event) => {
    const Foods = Array.from(document.getElementsByClassName("Food"))
    Foods.forEach((element, index) => {
        element.id = 'Food-' + index
        element.children[1].id = 'FoodName-' + index
        element.children[3].id = 'FoodPrice-' + index
        element.children[5].children[1].id = 'FoodQuantity-' + index
    }); 
}

const FoodToShopcartButtons = Array.from(document.getElementsByClassName("Food__Add-To-Shopcart-Button"))

FoodToShopcartButtons.forEach((element, index) => {
    element.addEventListener('click', CreateOrder)
});

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

