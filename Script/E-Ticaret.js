var user = window.localStorage.getItem('user')
var ul = document.getElementById('ulList')
if (user != null) {
    if (window.localStorage.getItem('admin') != null) {
        ul.innerHTML = '<li class="nav-item"><a class="nav-link" href="E-Ticaret-AddProduct.html"><i class="fas fa-plus"></i> Ürün Ekle</a></li>'
        ul.innerHTML += '<li class="nav-item"><a class="nav-link" href="E-Ticaret-SignIn.html" onclick="LogOut()"><i class="fas fa-sign-out-alt"></i> Çıkış Yap</a></li>'
    }
    else {
        ul.innerHTML = '<li class="nav-item"><a class="nav-link" href="E-Ticaret-SignIn.html" onclick="LogOut()"><i class="fas fa-sign-out-alt"></i> Çıkış Yap</a></li>'
    }
}

function LogOut() {
    return window.localStorage.clear()
}
