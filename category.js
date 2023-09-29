function viewMore() {
    window.location.assign("details.html");
}

// -----------------------------------------------------------------



let category = sessionStorage.getItem('category');
console.log(category);
document.getElementById('expolre').innerHTML += category;
async function selectCategory() {
    let categories = document.querySelectorAll('#categories').values;
    let apiUrl = "http://localhost:3001/"
    const response = await fetch(apiUrl + "categories" + '/' + category);
    var data = await response.json();
    console.log(data);
    let items = document.getElementById("itemsrow");
    for (let i = 0; i < data.length; i++) {
        items.innerHTML += `
        <div id="item" class="col pb-2">
            <div class="card">
            <div class="card-header text-center card-title">${data[i].item_name}</div>
            <div class="card-body"><img id="image" class="img-fluid" src="./images/${category}/${data[i].images.split(',')[0].trim()}"></img></div>
            <button type="button" class="btn btn-outline-warning" onclick="sessionStorage.setItem('item_number','${data[i].item_number}'); window.location.assign('details.html')";>View More</button>
            </div>
        </div>`;

        //for (let j = 0; j < data[i].images.split(',').length; j++) {
        //image.innerHTML += `<img src='./images/${category}/${data[i].images.split(',')[0].trim()}'></img>`;
        //}
    }
}
selectCategory();




