const express = require('express')
const bcrypt = require("bcrypt");
const { client } = require("../config/databasepg");
var jwt = require('jsonwebtoken');
const tokenKey = process.env.TOKEN_SECRET_KEY
const {signUpValidator,loginValidator} = require('../utils/validator');



const userRouter = express()

userRouter.post('/signup',async (req,res)=>{
    try{

        const { first_name, last_name, email, password, username } = req.body;
		await signUpValidator({ first_name, last_name, email, password, username });

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUserdata = await client.query(
			`INSERT INTO users (first_name, last_name, email, username, password) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
			[first_name, last_name, email, username, hashedPassword]
		);
        const newUser = newUserdata.rows[0]

        const token = await jwt.sign({ id: newUser.id }, tokenKey);

        res.cookie('token',token)
        res.status(201).send({
            message: 'Successfully created an account!',
            user:newUser})
    }catch(err){
        res.status(400).send(err.message)
    }
})

userRouter.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body
       const user = await loginValidator({email,password})
       const token = await jwt.sign({ id: user.id }, tokenKey);

        res.cookie('token',token)
        res.status(201).send({
            message: 'Successfully logged in!',
            user:user})

    }catch(err){
        res.status(400).send(err.message)
    }
})



module.exports = {userRouter}