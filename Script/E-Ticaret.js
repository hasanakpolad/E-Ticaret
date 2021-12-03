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

function GetProds() {
    GetAllProduct().then(res => {
        for (var i = 0; i < res.rows.length; i++) {
            urunDiv.innerHTML += newUrun
            var prodTitle = document.getElementById("urun" + prodCount + "Title")
            var prodBody = document.getElementById("urun" + prodCount + "Body")
            prodTitle.innerText = res.rows[i].productName
            prodBody.innerText = res.rows[i].productDesc
        }
        prodCount++
    }).catch(reject => {
        alert(reject.message)
    })
}