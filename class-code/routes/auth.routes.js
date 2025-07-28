const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")


router.get("/sign-up",(req,res)=>{
    res.render("auth/sign-up.ejs")
})

router.post("/sign-up",async(req,res)=>{
    try{

        
        const hashedPassword = bcrypt.hashSync(req.body.password,10) // encrypts our password

        req.body.password = hashedPassword

        await User.create(req.body)

        res.redirect("/auth/sign-up")
    }
    catch(error){
        console.log(error)
    }
})


router.get("/login",(req,res)=>{
    res.render("auth/login.ejs")
})

module.exports = router