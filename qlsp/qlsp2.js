let phone1 = new Phone("Iphone 15",30000000,100)
let phone2 = new Phone("Samsung 24",35000000,200)
let phone3 = new Phone("Nokia haha",10000000,150)

let products = [phone1, phone2, phone3]

displayProduct()

function displayProduct() {
    let data = "<table>"
    data += "<tr>" +
        "<th>STT</th>" +
        "<th>Product Name</th>" +
        "<th>Product Price</th>" +
        "<th>Product Quantity</th>" +
        "<th colspan='2' style='color: red'>" + products.length + " products</th>" +
        "</tr>"
    for (let i = 0; i < products.length; i++) {
        data += "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + products[i].name + "</td>" +
            "<td>" + products[i].price + "</td>" +
            "<td>" + products[i].quantity + "</td>" +
            "<td><button onclick='updateProduct(" + i + ")'>Edit</button></td>" +
            "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>" +
            "</tr>"
    }
    data += "</table>"
    console.log(data)
    document.getElementById("table-product").innerHTML = data
}

function addProduct() {
    let name = document.getElementById("add").value
    productNames.push(name)
    displayProduct()
    document.getElementById("add").value = ""
}

function updateProduct(index) {
    let product = products[index]
    let newName = prompt("Nhập vào tên mới của sản phẩm: " + product.name)
    let newPrice = prompt("Nhập vào giá mới của sản phẩm: " + product.price)
    let newQuantity = prompt("Nhập vào số lượng mới của sản phẩm: " + product.quantity)
    products[index] = new Phone(newName, newPrice,newQuantity)
    displayProduct()
}

function deleteProduct(index) {
    productNames.splice(index, 1)
    displayProduct()
}
