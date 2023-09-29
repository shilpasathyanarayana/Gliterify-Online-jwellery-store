
let category = sessionStorage.getItem('category');
let item_number = sessionStorage.getItem('item_number');
console.log(category);
console.log(item_number);

// Java script for adding to the cart


async function addToCart() {
    let cartObject = {
        "item_number": item_number,
        "count": 1,
        "category": category,
        "order_id": "3001"
    }
    console.log("items", cartObject);
    let apiUrl = "http://localhost:3002/"
    const response = await fetch(apiUrl + 'addToCart', {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartObject),
    });
    var data = await response.json();
    console.log(data);
    getCartItem();
    let body = document.querySelector('body');
    body.classList.add('active');
}

// -----------------------------------------------------------------


async function getItemDetail() {
    let apiUrl = "http://localhost:3001/"
    const response = await fetch(apiUrl + "categories" + '/' + category + '/' + item_number);
    var data = await response.json();
    console.log(data);
    console.log(data[0]);
    console.log(data[0].images);
    console.log(data[0].images.split(','));
    let imagesArray = data[0].images.split(',');

    let parentDiv = document.getElementById('carousel-inner');
    for (let i = 0; i < imagesArray.length; i++) {
        if (i == 0) {
            parentDiv.innerHTML += `<div class="carousel-item active"><img src='./images/${category}/${imagesArray[i].trim()}' class="d-block w-100"></img> </div>`;
        }
        else {
            parentDiv.innerHTML += `<div class="carousel-item"><img src='./images/${category}/${imagesArray[i].trim()}' class="d-block w-100"></img> </div>`;
        }
    }

    let itemName = document.getElementById('item-name');
    itemName.innerText = data[0].item_name;

    let itemPrice = document.getElementById('price');
    itemPrice.innerText = '$' + data[0].price;

}
document.onload = getItemDetail();

