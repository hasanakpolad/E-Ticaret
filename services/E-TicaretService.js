var db = openDatabase('UserDb', '1.0', 'Login Example', 1024);
db.transaction(function (params) {
    params.executeSql('Create Table If Not Exists User(id unique, kullaniciAdi, mail, sifre, IsAdmin)')
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
function GetUser(u, p) {
    return new Promise(function (resolve, reject) {
        db.transaction(function (tx) {
            tx.executeSql('Select kullaniciAdi,sifre, IsAdmin From User Where kullaniciAdi=? AND sifre = ?', [u, p], function (tx, result) {
                resolve(result)
                // return result;
            },
                function (tx, error) {
                    reject(alert('İşlem sırasında hata alındı' + error.message))
                });
        })
    })
}
//Create Product
db.transaction(function (tx) {
    tx.executeSql('Create Table If Not Exists Product(id unique, productImage, productName, productDesc, productCount, customerId)')
})
//GetProducts
function GetProducts(cN) {
    return new Promise(function (resolve, reject) {
        db.transaction(function (tx) {
            tx.executeSql('Select * From Product p INNER JOIN User u ON p.id = u.id', [], function (model, result) {
                resolve(result)
            },
                function (tx, error) {
                    reject(alert('' + error.message))
                }
            )
        })
    })
}
// Add Products 
function AddProducts(pI, pD, pN, pC) {
    return new Promise(function (resolve, reject) {
        db.transaction(function (tx) {
            tx.executeSql('Insert Into Product Values(?,?,?,?,?,?)', [1, pI, pD, pN, pC, 1], function (model, result) {
                resolve(result)
            },
                function (tx, error) {
                    reject(alert('İşlem Sırasında bir hata ile karşılaşıldı.' + error.message))

                }
            );
        })
    })
}

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
db.transaction(function (tx) {
    tx.executeSql('Create Table If Not Exists Basket(id unique, cName, pName, cId, pId)')
})
//AddBasket
function GetBasket() {
    return new Promise(function (resolve, reject) {
        db.transaction(function (tx) {
            tx.executeSql('Select * From Basket', [], function (model, result) {
                resolve(result)
            },
                function (tx, error) {
                    reject(alert('İşlem sırasında bir hata ile karşılaşıldı.' + error.message))
                }
            )
        })
    })
}
function AddBasket(id, pn, cn, cid, pid) {
    return new Promise(function (resolve, reject) {
        db.transaction(function (tx) {
            tx.executeSql('Insert Into Basket Values(?,?,?,?,?)', [id, pn, cn, cid, pid], function (model, result) {
                resolve(result)
            },
                function (tx, error) {
                    reject(alert('İşlem Sırasında Bir Hata İle Karşılaşıldı.' + error.message))
                }
            )
        })
    })
}

//AddPicture
function AddPicture(pI, pN) {

}