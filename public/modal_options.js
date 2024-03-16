function focusOption(Element ,ID, Option, Name, Price){
    let secondClick = false;
    if(document.getElementById(ID)){
        if(Element.id == ID){
            secondClick = true
        }
        changePrice("-", document.getElementById(ID).children[2].innerText.split(" ")[1])
        document.getElementById(ID).removeAttribute("style")
        document.getElementById(ID).removeAttribute('id')
    }
    if(!secondClick){
        document.getElementsByClassName(Option)[0].innerText = `Размер: ${Name}`
        changePrice("+", Price)
        Element.id = ID
        Element.style.background = 'rgb(255, 217, 0)'
    }
}

function changePrice(Option, Price){
    const CurrentPrice = Number(document.getElementsByClassName("Modal__Price")[0].innerText.split(" ")[1])
    let NewPrice = 0;
    switch(Option){
        case '+':
            NewPrice = CurrentPrice + Number(Price)
            break;
        case "-":
            NewPrice = CurrentPrice - Number(Price)
            break;
    }
    document.getElementsByClassName("Modal__Price")[0].innerText = `Итого: ${NewPrice} руб.`;
}

function selectSizeOption(){
    const OptionType = this.parentNode.className
    const Name = this.children[1].innerText
    const Price = this.children[2].innerText.split(' ')[1]    

    switch (OptionType){
        case "Modal__Options-Sizes":
            focusOption(this, 'chosen_size', "Modal__Order-Size", Name, Price)
            break;
        case "Modal__Options-Breads":
            focusOption(this, 'chosen_bread', "Modal__Order-Bread", Name, Price)
            break;
        case "Modal__Options-Vegies":
            focusOption(this, 'chosen_vegetable', "Modal__Order-Vegie", Name, Price)
            break;
        case "Modal__Options-Sauces":
            focusOption(this, 'chosen_sauce', "Modal__Order-Sauce", Name, Price)
            break;
        case "Modal__Options-Fillings":
            focusOption(this, 'chosen_filling', "Modal__Order-Filling", Name, Price)
            break;                
    }
}

const AllOptions = Array.from(document.getElementsByClassName("Modal__Option"))
AllOptions.forEach((element) =>{
    element.addEventListener('click', selectSizeOption)
})
