let productNames = ["Iphone 15", "Samsung Galaxy Ultra 24", "Nokia haha"]
let productPrices = [30000000, 35000000, 10000000]
let productQuantity = [100, 200, 150]

displayProduct()

function displayProduct() {
    let data = "<table>"
    data += "<tr>" +
        "<th>STT</th>" +
        "<th>Product Name</th>" +
        "<th>Product Price</th>" +
        "<th>Product Quantity</th>" +
        "<th colspan='2' style='color: red'>" + productNames.length + " products</th>" +
        "</tr>"
    for (let i = 0; i < productNames.length; i++) {
        data += "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + productNames[i] + "</td>" +
            "<td>" + productPrices[i] + "</td>" +
            "<td>" + productQuantity[i] + "</td>" +
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
    let name = productNames[index]
    let price = productPrices[index]
    let quantity = productQuantity[index]
    productNames[index] = prompt("Nhập vào tên mới của sản phẩm: " + name)
    productPrices[index] = prompt("Nhập vào giá mới của sản phẩm: " + price)
    productQuantity[index] = prompt("Nhập vào số lượng mới của sản phẩm: " + quantity)
    displayProduct()
}

function deleteProduct(index) {
    productNames.splice(index, 1)
    displayProduct()
}
