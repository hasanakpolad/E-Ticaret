

function GetAllProduct() {
    return new Promise(function (resolve, reject) {

        db.transaction(function (tx) {
            tx.executeSql('Select * From Product', [], function (model, result) {
                resolve(result)
            })

        },
            function (tx, error) {
                reject('İşlem sırasında bir hata alındı.', error.message)
            }
        )
    })
}

var user = window.localStorage.getItem('user')
var ul = document.getElementById('ulList')
if (user != null) {
    ul.innerHTML = '<li class="nav-item"><a class="nav-link" href="E-Ticaret-SignIn.html" onclick="LogOut()"><i class="fas fa-sign-out-alt"></i> Çıkış Yap</a></li>'

}

function LogOut() {
    return window.localStorage.clear()
}