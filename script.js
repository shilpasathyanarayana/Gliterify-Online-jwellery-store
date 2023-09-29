
// in Our collection to fetch different categories from mysql
async function getCategories() {
    try {
        const response = await fetch("http://localhost:3001/categories");
        var data = await response.json();
        console.log(data);
        let categoriresDiv = document.getElementById("categories");
        for (let i = 0; i < data.length; i++) {
            categoriresDiv.innerHTML += `<div class="categories">
        <h3>${data[i].category}</h3>
        <div class="sub-categories" onclick="sessionStorage.setItem('category','${data[i].category}');window.location.assign('category.html');" style="background-image: url(./images/${data[i].images});">
        </div> 
        </div>`;
        }
    } catch (e) {

    }
}
document.onload = getCategories();
// -------------------------------------------------------------------


// for display the cart list when we click cart icon
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})


// ----------------------------------------------------------------------


// to display the cart item list in the cart when we click cart icon
async function getCartItem() {
    let apiUrl = "http://localhost:3002/"
    const response = await fetch(apiUrl + "cartItems" + "/order_id" + '/3001');
    var data = await response.json();
    console.log(JSON.stringify(data));
    let cartItemsdiv = document.getElementById('cart-items');
    let arraysize = data.items.length;
    cartItemsdiv.innerHTML = "there are " + arraysize + " items in the cart <br/>";
    for (let i = 0; i < data.items.length; i++) {
        const response = await fetch("http://localhost:3001/" + "categories" + '/' + data.items[i].category + '/' + data.items[i].item_number);
        var data1 = await response.json();
        console.log(JSON.stringify(data1));
        cartItemsdiv.innerHTML += `
        <div class="listCard">
        <div class="item-name">
            <h5>${data1[0].item_name}</h5>
        </div>
        <div class="sub-listcard">
            <div class="item_image">
                <img src="./images/${data.items[i].category}/${data1[0].images.split(",")[0]}" height="50px" width="50px"></img>
            </div>
            <button class="cart-btn" onClick="addOrremoveCartItemUsingBtn('${data.items[i].item_number}','${data.items[i].category}', 'add', ${data.items[i].total_number})">+</button>
            <span class="quantity">${data.items[i].total_number}</span>
            <button class="cart-btn"  onClick="addOrremoveCartItemUsingBtn('${data.items[i].item_number}','${data.items[i].category}', 'sub', ${data.items[i].total_number})">-</button>
            <span class="sub-total">$ ${data.items[i].price}</span>
        </div>
    </div>
    `
    }
    let totalAmount = document.getElementById('totalAmount');
    if (data.total != null) {
        totalAmount.innerHTML = "$" + data.total;
    }
    else {
        totalAmount.innerHTML = "$0";
    }
}

async function deleteCartItem() {
    let apiUrl = "http://localhost:3002/"
    const response = await fetch(apiUrl + 'cartItems/' + 'order_id/' + "3001", {
        method: "DELETE", // or 'PUT'
    });
    let cartItemsdiv = document.getElementById('cart-items');
    cartItemsdiv.innerHTML = null;
    let totalAmountdiv = document.getElementById('totalAmount');
    totalAmountdiv.innerHTML = "$0";
}


async function addOrremoveCartItemUsingBtn(product_number, type, addOrSub, total_number) {
    let cartObject = {
        "item_number": product_number,
        "count": total_number,
        "category": type,
        "addOrSub": addOrSub,
        "order_id": "3001"
    }
    console.log("items", cartObject);
    let apiUrl = "http://localhost:3002/"
    const response = await fetch(apiUrl + 'addOrRemove', {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartObject)
    });
    var data = await response;
    console.log(data);
    getCartItem();
}

// ----------------------------------------------------------------------



