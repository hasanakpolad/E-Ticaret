var user = window.localStorage.getItem('user')
var ul = document.getElementById('ulList')
if (user != null) {
    ul.innerHTML = '<li class="nav-item"><a class="nav-link" href="E-Ticaret-SignIn.html" onclick="LogOut()"><i class="fas fa-sign-out-alt"></i> Çıkış Yap</a></li>'

}

function LogOut() {
    return window.localStorage.clear()
}
var pic, isim, desc, count
pic = document.getElementById('prodPic')
isim = document.getElementById('prodName')
desc = document.getElementById('prodDesc')
count = document.getElementById('prodCount')
var base64String = ''
function Base64ToImage(params) {
    var loadFile = function (event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    }
}
function ImageToBase64(params) {
    const file = document.querySelector("#prodPic").files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
        console.log(reader.result)
        base64String = reader.result
    }, false);
    if (file) reader.readAsDataURL(file);
}
function AddProd() {
    AddProducts(base64String, isim.value, desc.value, count.value).then(res => {
        pic.value = null
        isim.value = null
        desc.value = null
        count.value = null
    }).catch(reject => {
        alert(reject.message)
    })
}