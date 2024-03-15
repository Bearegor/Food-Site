function CreateModalOrder(){
    const Name = document.getElementsByClassName("Modal__Order-Name")[0].innerText
    const Price = document.getElementsByClassName("Modal__Price")[0].innerText.split(' ')[1]
    const Quantity = document.getElementsByClassName("Modal__Order-Quantity-Number")[0].innerText
    console.log(Quantity)

    AddOrder(Name, Price, Quantity)
    closeModal()
}

const ModalToShopcartButtons = Array.from(document.getElementsByClassName("Modal__Options-Ready-Btn"))
ModalToShopcartButtons.forEach((element, index) =>{
    element.addEventListener('click', CreateModalOrder)
})