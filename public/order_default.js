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
    console.log("Заказ сделан")
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

    console.log("Заказ добавлен")
    CalcTotal()
}

function CalcTotal(){
    const Shopcart = document.getElementsByClassName("Shopcart__List")[0]
    const Entries = Array.from(Shopcart.children)
    let Total = 0;
    Entries.forEach((element) => {
        const Parts = Array.from(element.children)
        const Price = Number(Parts[1].innerText) * Number(Parts[2].innerText)
        Total += Price
    })
    
    const TotalCount = document.getElementsByClassName("Shopcart__Total-Count")[0]
    TotalCount.innerText = `Всего: ${Total} руб.`

    console.log("Сумма всего заказа посчитана")
}

const FoodToShopcartButtons = Array.from(document.getElementsByClassName("Food__Add-To-Shopcart-Button"))
FoodToShopcartButtons.forEach((element, index) => {
    element.addEventListener('click', CreateOrder)
});