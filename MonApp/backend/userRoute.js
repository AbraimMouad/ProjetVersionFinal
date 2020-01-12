var express = require('express')
var cors = require('cors')
const users = express.Router()


const User = require('./userModel')

// users.post('/addUser' , (req ,res) => {

// })

users.get('/allUsers', (req,res) => {
    User.find({} , (err , std) =>{
        if(err){
            res.json(std)
            }else{
            res.send('Users does not exsist !')}
    })
    
       
   
    
} )

users.post('/addUser' , (req,res) => {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
})

module.exports = users ;