const express = require('express')
const app = express()

app.use(express.json())

const userlist = {
    1:{
        "Full name" : 'Didier Drogba',
        "User name" : 'DDrogba',
        "Address"   : 'Ivory Coast'
    },
    2:{
        "Full name" : 'Mason Mount',
        "User name" : 'Mase',
        "Address"   : 'England'
    },
    3:{
        "Full name" : 'Kai Havertz',
        "User name" : 'KingKai',
        "Address"   : 'Germany'
    },
    4:{
        "Full name" : 'Kepa Arrizabalaga',
        "User name" : 'KepaArr',
        "Address"   : 'Spain'
    },
}

app.get('/list_user', function (req, res) {
    res.json(userlist)
})

app.post('/create_user', function (req, res) {
    let newUserList = req.body
    let id = 5
    userlist[id] = newUserList
    res.json(userlist)
    id++        
})

app.listen(3000)
