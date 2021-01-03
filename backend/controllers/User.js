const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


process.env.SECRET_KEY = 'secretcode';

//register user
exports.register = (req,res) =>{
    const today = new Date();

    const userData = {
        firstName : req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        createdDate:today
    }

    User.findOne({
        email:req.body.email
    })
        .then(user =>{
            if(!user){
                bcrypt.hash(req.body.password , 10, (err,hash) =>{
                    userData.password = hash
                    User.create(userData)
                        .then(user =>{
                            res.json(user.email+" registered successfully")
                        })
                        .catch(err =>{
                            res.send("Invalid Data")
                        })
                })
            }else{
                res.json("User already registered")
            }
        })
        .catch(err=>{
            res.send("Invalid Data")
        })

}

//login user
exports.login = (req,res) =>{
    User.findOne({
        email:req.body.email
    })
        .then(user =>{
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    const data = {
                        _id : user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email:user.email
                    }
                    let token = jwt.sign(data , process.env.SECRET_KEY,{
                        expiresIn: 1440
                    })
                    res.send(token);

                }
                else{
                    res.json("User does not exist")
                }
            }else{
                res.json("Please fill out all the fields")
            }
        })
        .catch(err =>{
            res.send("error "+err)
        })
}

//load user profile
exports.loadProfile = (req,res) =>{
    let decoded  = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        _id : decoded._id
    })
        .then( user =>{
            if(user){
                res.json(user)
            }else{
                res.send("User does not exist")
            }
        })
        .catch(err =>{
            res.send("error" +err)
        })
}