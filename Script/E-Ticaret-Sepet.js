var product = document.getElementById('products');
var user = window.localStorage.getItem('user')
function GetBasket() {
    if (user == '') {
        GetBasket()
    }
    else{
        GetProducts()
    }
}

//Services
//Create new Product Table If Not 
