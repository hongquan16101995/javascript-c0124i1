let products = ["Iphone 15", "Samsung Galaxy Ultra 24", "Nokia haha"]

displayProduct()

function displayProduct() {
    let data = "<table>"
    data += "<tr>" +
        "<th>STT</th>" +
        "<th>Product Name</th>" +
        "<th colspan='2' style='color: red'>" + products.length + " products</th>" +
        "</tr>"
    for (let i = 0; i < products.length; i++) {
        data += "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + products[i] + "</td>" +
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
    products.push(name)
    displayProduct()
    document.getElementById("add").value = ""
}

function updateProduct(index) {
    let name = products[index]
    products[index] = prompt("Nhập vào tên mới của sản phẩm: " + name)
    displayProduct()
}

function deleteProduct(index) {
    products.splice(index, 1)
    displayProduct()
}
