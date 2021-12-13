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
            window.open('/E-Ticaret-SignIn.html', '_self')
        }
        else {
            alert('Şifreler aynı olmak zorunda')
        }
    }
    else {
        alert('Alanlar boş olamaz.')
    }
}
