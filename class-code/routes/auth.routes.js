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

        res.redirect("/auth/login")
    }
    catch(error){
        console.log(error)
    }
})


router.get("/login",(req,res)=>{
    res.render("auth/login.ejs")
})

router.post("/login",async(req,res)=>{
    try{
        const foundUser = await User.findOne({username:req.body.username})
        console.log(req.body)
        const validPassword = bcrypt.compareSync(req.body.password,foundUser.password)
        console.log(validPassword)
    }
    catch(error){

    }
})

module.exports = router