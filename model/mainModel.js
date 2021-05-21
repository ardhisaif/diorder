const pool = require("../connection")

class MainModel{
    
    static show(cb){
        const select = `select * from item`
        pool.query(select, (err, res) =>{
            if (err) {
                cb(err)
            }else{
                cb(null, res.rows)
            }
        })
    }

    static open(id, cb){
        const select = `select * from item where id = ${id} `
        pool.query(select, (err, res) =>{
            if (err) {
                cb(err)
            }else{
                cb(null, res.rows)
            }
        })
    }

    static insert(id, cb){
        console.log('insert');
        const add =`insert into "shopingCart" (customer_id, item_id) values (8, ${id})`
        pool.query(add, (err, res) =>{
            if (err) {
                cb(err)
            }else{
                cb(null)
            }
        })
    }

    static shop(cb){
        const select = `SELECT *
        FROM customer c
        JOIN "shopingCart" sc 
          ON c.id = sc.customer_id 
        JOIN item i
          ON i.id = sc.item_id 
        where c.id =8`
        pool.query(select, (err, res) =>{
            if (err) {
                cb(err)
            }else{
                cb(null, res.rows)
            }
        })
    }

}

module.exports = MainModel