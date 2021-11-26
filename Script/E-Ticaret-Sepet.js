var product = document.getElementById('products');
var user = window.localStorage.getItem('user')
function GetBasket() {
    if (user == '') {
        GetBasket().then(res => function (params) {
            if (res.rows.length != 0) {
                product.removeAttribute('display')
            }
        }).catch()
    }
    else{
        GetProducts()
    }
}
function Temizle() {

}

function SatınAl(params) {
    if (user == '') {
        alert('Lütfen devam etmek için giriş yapınız.')
        window.open('/E-Ticaret/E-Ticaret-SignIn.html','_self')
    }
    else{
        Temizle()
        alert('Satın Alma işlemi başarılı.')
    }
}

var user = window.localStorage.getItem('user')
var ul = document.getElementById('ulList')
if (user != null) {
    ul.innerHTML = '<li class="nav-item"><a class="nav-link" href="E-Ticaret-SignIn.html" onclick="LogOut()"><i class="fas fa-sign-out-alt"></i> Çıkış Yap</a></li>'

}

function LogOut() {
    return window.localStorage.clear()
}