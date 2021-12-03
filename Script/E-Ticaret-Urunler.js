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

var urunDiv = document.getElementById('sampleUrun')
var prodCount = 1
var newUrun
function GetProd(params) {
    GetAllProduct().then(res => {
        for (var i = 0; i < res.rows.length; i++) {
            newUrun = '<div><div class="card" id="urun' + prodCount + '" style="width: 18rem;"> ' +
                '<img src="res/img.PNG" class="card-img-top" alt="...">' +
                '<div class="card-body"> ' +
                '   <h5 class="card-title" id="urun' + prodCount + 'Title"></h5> ' +
                '  <p class="card-text" id="urun' + prodCount + 'Body"> </p> ' +
                ' <div class="basketBtn"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="btnUrun' + prodCount + '" onclick="GetModalDesc(this)">Ürün ' +
                '     Detay</button>' +
                '<div class="basket"> ' +
                '<input type="number" step="1" class="basket-input" id="prdCnt">' +
                '<button class="basket-button" type="submit">Sepet</button> ' +
                ' </div></div>' +
                '</div> </div>'
            urunDiv.innerHTML += newUrun
            var prodTitle = document.getElementById("urun" + prodCount + "Title")
            var prodBody = document.getElementById("urun" + prodCount + "Body")
            prodTitle.innerText = res.rows[i].productName
            prodBody.innerText = res.rows[i].productDesc
            prodCount++
        }
    }).catch(reject => {
        alert(reject.message)
    })
}