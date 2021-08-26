const MainModel = require('../model/mainModel')

class MainController{

    static show(req, res){
        MainModel.show((err, data) =>{
            if (err) {
                res.send(err)
            }else{
                res.render('main', {item: data})
            }
        })
    }

    static open(req, res){
        let id = +req.params.id
        MainModel.open(id, (err, data) =>{ 
            if (err) {
                res.send(err)
            }else{
                res.render('mainOpen', {item: data[0]})
            }
        })
    }

    static insert(req, res){
        let id = +req.params.id
        console.log(id);
        console.log('============');
        MainModel.insert(id, (err, data) =>{
            if (err) {
                res.send(err)
            }else{
                res.redirect('/main/' + id)
            }
        })
    }

    static shop(req, res){
        MainModel.shop((err, data) =>{
            if (err) {
                res.send(err)
            }else{
                res.render('shopingCart', {item: data})
            }
        })
    }

}

module.exports = MainController