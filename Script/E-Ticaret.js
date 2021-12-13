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
            if (res.rows.length > 2) {
                return;
            }
            else {
                newUrun = '<div><div class="card" id="urun' + prodCount + '" style="width: 18rem;"> ' +
                '<img src="res/img.PNG" class="card-img-top" alt="...">' +
                '<div class="card-body"> ' +
                '   <h5 class="card-title" id="urun' + prodCount + 'Title"></h5> ' +
                '  <p class="card-text" id="urun' + prodCount + 'Body"></p> ' +
                ' <div class="basketBtn"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="btnUrun' + prodCount + '" onclick="GetModalDesc(this)">Ürün ' +
                '     Detay</button>' +
                '<div class="basket"> ' +
                '<input type="number" step="1" min="0" class="basket-input" id="prdCnt">' +
                '<button class="basket-button" type="submit" onclick="BasketAdd()">Sepet</button> ' +
                ' </div></div>' +
                '</div>' +
                '</div> </div>'
                urunDiv.innerHTML += newUrun
                var cnt = document.getElementById("prdCnt")
                var prodTitle = document.getElementById("urun" + prodCount + "Title")
                var prodBody = document.getElementById("urun" + prodCount + "Body")
                prodTitle.innerText = res.rows[i].productName
                prodBody.innerText = res.rows[i].productDesc
                prodCount++
                window.localStorage.setItem('count', cnt.value)
            }
        }
    }).catch(reject => {
        alert(reject.message)
    })
}
function GetModalDesc(pId) {
    GetProducts(pId).then(res => {
        for (var i = 0; i < res.rows.length; i++) {
            var modalHead = document.getElementById("modalHeader")
            var modalBody = document.getElementById("modalBody")
            modalHead.innerText = res.rows[i].productName
            modalBody.innerText = res.rows[i].productDesc
        }
    }).catch(reject => {
        alert(reject.message)
    })
}
function BasketAdd() {
    alert("deneme")
    AddBasket().then(res => {

    }).catch(reject => {
        alert(reject.message)
    })
}