const pool = require("../connection")



const add = `ALTER TABLE customer 
ADD COLUMN password VARCHAR (20); `

const deleted = `delete from customer`

const insert = `insert into customer (name, telephonenumber, adress, email, password)
values ('ana', '027xxx', 'gresik', 'f@gmail.com', 'qwerty')`

class LoginModel{

    static login(dataLogin, cb){
        const select = `select * from customer where name = '${dataLogin.name}' and "password" = '${dataLogin.password}'`
        pool.query(select, (err, res) =>{
            if (err) {
                cb(err)
            }else{
                cb(null, res.rows)
            }
        })
    }

    
}

module.exports = LoginModel