//Controller

function Login(params) {
    var userName, pass, remem
    userName = document.getElementById('name').value
    pass = document.getElementById('password').value
    remem = document.getElementById('remember')
    if (userName != '' && pass != '') {
        GetUser(userName, pass).then(res => {
            if (res.rows.length != 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    if (res.rows[i].kullaniciAdi == userName && res.rows[i].sifre == pass) {
                        console.log('Giriş başarılı')
                        if (res.rows[i].IsAdmin == 'X') {
                            window.localStorage.setItem('user', userName)
                            window.localStorage.setItem('admin', res.rows[i].IsAdmin)
                            window.open('/E-Ticaret.html', '_self')
                        }
                        else {
                            window.open('/E-Ticaret.html', '_self')
                            window.localStorage.setItem('user', userName)
                        }
                    }
                }
            }
            else {
                alert('Kullanıcı adı veya şifre yanlış')
                console.log('Kullanıcı adı veya şifre yanlış')
            }
        }).catch(reject => {
            console.log(reject.message)
            alert('deneme' + reject.message)
        })
    }
    else {
        alert('Alanlar boş olamaz')
    }
}
