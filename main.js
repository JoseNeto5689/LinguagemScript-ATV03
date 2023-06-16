function refreshTable(){
    const table = document.querySelector("tbody")
    table.innerHTML = ""
    const list = listItems()
    list.forEach(item => {
        const row = document.createElement("tr")
        const productName = document.createElement("td")
        productName.innerText = item.name
        const productPrice = document.createElement("td")
        productPrice.innerText = item.price
        const productStatus = document.createElement("td")
        const check = document.createElement("input")
        check.type = "checkbox"
        check.checked = item.bought
        check.addEventListener("click", () => {
            markItem(item, !item.bought)
            refreshTable()
        })
        productStatus.appendChild(check)
        const productActions = document.createElement("td")
        const remove = document.createElement("button")
        remove.innerText = "Remover"
        remove.addEventListener("click", () => {
            removeItem(item)
            refreshTable()
        })
        productActions.appendChild(remove)
        row.appendChild(productName)
        row.appendChild(productPrice)
        row.appendChild(productStatus)
        row.appendChild(productActions)
        table.appendChild(row)

    })

}

refreshTable()

document.querySelector("button#add").addEventListener("click", () => {
    const productName = document.querySelector("#product_name")
    const productPrice = document.querySelector("#product_price")
    addProduct(productName.value, productPrice.value)
    productName.value = ""
    productPrice.value = 0
    refreshTable()
})
