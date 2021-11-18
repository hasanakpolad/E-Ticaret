//Controller
var userName, mail, pass, passagn
userName = document.getElementById('name')
mail = document.getElementById('email')
pass = document.getElementById('password')
passagn = document.getElementById('passwordagn')

function Send() {
    if (userName.value != '' && mail.value != '' && pass.value != '' && passagn.value != '') {
        if (pass.value == passagn.value) {
            AddUser(userName.value, mail.value, pass.value)
            window.location.href = '/E-Ticaret/E-Ticaret-SignIn.html'
        }
        else {
            alert('Şifreler aynı olmak zorunda')
        }
    }
    else {
        alert('Alanlar boş olamaz.')
    }
}
var db = openDatabase('UserDb', '1.0', 'Login Example', 1024);
db.transaction(function (params) {
    params.executeSql('Create Table If Not Exists User(id unique, kullaniciAdi, mail, sifre)')
})
function AddUser(n, m, p) {
    return new Promise(function (resolve, reject) {

        db.transaction(function (model) {
            model.executeSql('Insert Into User( kullaniciAdi, mail, sifre) Values(?,?,?)', [n, m, p], function (model, result) {
                resolve(alert('Kayıt başarılı' + result))
            },
                function (error) {
                    reject(alert('Kayıt Başarısız' + error.message))
                })
        })
    })

}