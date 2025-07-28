const router = require("express").Router()
const User = require("../models/User")


router.get("/sign-up",(req,res)=>{
    res.render("auth/sign-up.ejs")
})

router.post("/sign-up",async(req,res)=>{
    try{
        await User.create(req.body)
        res.redirect("/auth/sign-up")
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router