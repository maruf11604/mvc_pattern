const express=require('express')
const userCouter=require('../controller/user.controller')
const router=express.Router()

router.get("/user",userCouter.getAllUser)
router.post("/user",userCouter.saveAuser)


module.exports=router