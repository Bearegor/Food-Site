function CalcTotal(){
    const Shopcart = document.getElementsByClassName("Shopcart__List")[0]
    let Total = 0;
    Shopcart.children.forEach((element) => {
        const Price = Number(element.children[1].innerText)
        Total += Price
    })
    
    const TotalCount = document.getElementsByClassName("Shopcart__Total-Count")[0]
    TotalCount.innerText = `Всего: ${Total} руб.`
}
