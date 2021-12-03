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
var newUrun = '<div><div class="card" id="urun' + prodCount + '" style="width: 18rem;"> ' +
    '<img src="res/img.PNG" class="card-img-top" alt="...">' +
    '<div class="card-body"> ' +
    '   <h5 class="card-title" id="urun' + prodCount + 'Title">Card title</h5> ' +
    '  <p class="card-text" id="urun' + prodCount + 'Body">Some quick example text to build on the card title and make up ' +
    '     the bulk of the' +
    '     cards ' +
    '     content.</p> ' +
    ' <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="btnUrun' + prodCount + '">Ürün ' +
    '     Detay</button>' +
    ' <a href="#" class="btn btn-primary">Sepete Ekle</a>' +
    '</div>' +
    '</div> </div>'
function GetProd(params) {
    GetAllProduct().then(res => {
        for (var i = 0; i < res.rows.length; i++) {
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