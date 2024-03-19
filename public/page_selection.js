function hideOtherPages(){
    const Sandwiches = document.getElementsByClassName("FoodList__Sandwiches")[0]
    const Burgers = document.getElementsByClassName("FoodList__Burgers")[0]
    const Salads = document.getElementsByClassName("FoodList__Salads")[0]
    const Chicken = document.getElementsByClassName("FoodList__Chicken")[0]
    const Drinks = document.getElementsByClassName("FoodList__Drinks")[0]
    const Pizza = document.getElementsByClassName("FoodList__Pizza")[0]
    const Shaurma = document.getElementsByClassName("FoodList__Shaurma")[0]
    const AllPages = [Sandwiches, Burgers, Salads, Chicken, Drinks, Pizza, Shaurma]
    console.log("Сработало")

    AllPages.forEach((element) =>{
        element.style.display = 'none'
    })
    const Chosen = this.innerText;
    switch (Chosen){
        case 'Сэндвичи':
            Sandwiches.style.display = 'flex';
            break;            
        case 'Бургеры':
            Burgers.style.display = 'flex';
            break;            
        case 'Салаты':
            Salads.style.display = 'flex';
            break;
        case 'Курица':
            Chicken.style.display = 'flex';
            break;
        case 'Пицца':
            Pizza.style.display = 'flex';
            break;
        case 'Шаурма':
            Shaurma.style.display = 'flex';
            break;
        case 'Напитки':
            Drinks.style.display = 'flex';
            break;
        default:
            AllPages.forEach((element) =>{
                element.style.display = 'flex'
            })
            break;              
    }

}

const Selection = Array.from(document.getElementsByClassName("Selection__Selector"))
Selection.forEach((element) => {
    element.addEventListener('click', hideOtherPages)
})