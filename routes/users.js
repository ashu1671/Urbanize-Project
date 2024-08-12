const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

const User = require('../models/User');
const { route } = require('moongose/routes');



router.post('/signup' , async(req,res)=>{
    const {name, email, password} = req.body;

    try{
        //checking for if user already signed up
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:'User already exists'});
        }

        //creating new user
        user = new User({
            name,
            email,
            password
        });

        //encrypting password before saving

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        res.status(201).json({msg:'User registered successfully'});
    } catch(err){
        console.error(err.message);
        req.status(500).send('Server error');
    }
});

module.exports = router;