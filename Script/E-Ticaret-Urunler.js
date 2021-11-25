

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