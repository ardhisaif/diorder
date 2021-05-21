const LoginModel = require("../model/loginModel")

class LoginController{

    static login(req, res){
        let dataLogin ={
            name : req.body.name,
            password : req.body.password
        }
        console.log(req.body);
        LoginModel.login(dataLogin, (err, data) =>{
            if (err) {
                res.send('gagal')
            }else{
                if(data.length === 0){
                    res.render('login',{err:"Username/password salah",dataLogin})

                }else{
                    res.redirect("/main")
                }
            }
        })
    }
}

module.exports = LoginController