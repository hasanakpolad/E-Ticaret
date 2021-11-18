//Controller
var userName, pass, remem
userName = document.getElementById('name')
pass = document.getElementById('password')
remem = document.getElementById('remember')
function Login(params) {
    if (userName != '' && pass != '') {
        GetUser(userName.value, pass.value).then(res => {
            if (res.rows.length != 0) {
                if (res.rows[0].kullaniciAdi == userName.value && res.rows[0].sifre == pass.value) {
                    console.log('Giriş başarılı')
                    window.location.href = '/E-Ticaret/E-Ticaret.html'
                }
            }
            else {
                alert('Kullanıcı adı veya şifre yanlış')
                console.log('Kullanıcı adı veya şifre yanlış')
            }
        })
            .catch(reject => {
                console.log(reject.message)
                alert(reject.message)
            })

    }
    else {
        alert('Alanlar boş olamaz')
    }
}

//Services
function GetUser(u, p) {
    return new Promise(function (resolve, reject) {
        db.transaction(function (tx) {
            tx.executeSql('Select kullaniciAdi,sifre From User Where kullaniciAdi=? AND sifre = ?', [u, p], function (tx, result) {
                resolve(result)
                // return result;
            },
                function (tx, error) {
                    reject(alert('İşlem sırasında hata alındı' + error.message))
                });
        })
    })
}