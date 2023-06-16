function saveItem(name, obj){
    try {
        localStorage.setItem(name, JSON.stringify(obj))
        return 1
    } catch {
        return 0
    }
}

function listItems(){
    let value = JSON.parse(localStorage.getItem("list"))
    return value
}

function addItem(...values){
    const data = listItems()
    data.push(...values)
    saveItem("list", data)
}

function isEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }
  
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }

function removeItem(data){
    const list = listItems()
    const newList = []
    list.forEach((item) => {
        if(!isEqual(data, item)){
            newList.push(item)
        }
    })
    
    saveItem("list", newList)
}

function markItem(data, status){
    const list = listItems()
    list.forEach((item) => {
        if(isEqual(data, item)){
            item.bought = status
        }
    })
    saveItem("list", list)
}


function nextID() {
    const numbers = new Set();
    const list = listItems()
    for (const objeto of list) {
    numbers.add(objeto.id);
    }
    let nextID = 0;
    while (numbers.has(nextID)) {
      nextID++;
    }
  
    return nextID;
  }

function addProduct(name, price){
    const product = {
        id: nextID(),
        name,
        price,
        bought: false
    }
    addItem(product)
}

