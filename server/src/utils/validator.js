const validator = require('validator');
const {client} = require('../config/databasepg')
const bcrypt = require('bcrypt');



const signUpValidator = async (data)=>{
    try{
    const {first_name, last_name, email, password, username} = data
    if(!first_name){
        throw new Error ('First Name is required')
    }
    if(!last_name){
        throw new Error ('Last Name is required')
    }
    if(!validator.isEmail(email)){
        throw new Error ('Please enter a valid Email Address')
    }

     const userData = await client.query('SELECT * FROM users WHERE email = $1', [email])
        const emailExists = emailData.rows.length >  0

        if(emailExists){
            throw new Error ('This Email exists, please choose another email')
        }
    


    if(!username){
        throw new Error('Please choose a Username')
    }
        const userNameData = await client.query('SELECT * FROM users WHERE username = $1', [username])
        const usernameExists = userNameData.rows.length >  0

        if(usernameExists){
            throw new Error ('This Username exists, please choose another username')
        }
    }catch(err){
        throw new Error(`${err.message}`)

    }
}

const loginValidator = async(data)=>{
    try{

        const {email,password}= data
        if (!email || !password){
            throw new Error ('All Fields are Required')
        }

        const userData = await client.query('SELECT * FROM users WHERE email = $1', [email])
        const isEmailAvailable = userData.rows.length > 0
        if (!isEmailAvailable){
            throw new Error('Email  not vaild!')
        }

        const passwordHash = userData.rows[0].password
        const isPasswordValid = bcrypt.compare(password, passwordHash)
        if(!isPasswordValid){
            throw new Error('Password not vaild!')
        }

        return userData.rows[0]
        
    }catch(err){
        throw new Error(err.message)
    }
}


module.exports = {signUpValidator, loginValidator}
