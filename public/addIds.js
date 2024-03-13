function CreateAndAddOrder(){
    const Parent = this.parentNode;
    const Name = Parent.children[1].innerText
    const Price = Parent.children[3].innerText.split(' ')[1]
    const Quantity = Parent.children[5].children[1].innerText
    const Details = {
        name: Name,
        price: Price,
        quantity: Quantity
    }

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

const Buttons = Array.from(document.getElementsByClassName("Food__Add-To-Shopcart-Button"))

Buttons.forEach((element, index) => {
    element.addEventListener('click', CreateAndAddOrder)
});