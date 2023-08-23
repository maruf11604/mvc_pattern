const users=require('../model/users.model')
const path=require('path')

module.exports.getAllUser=(req,res)=>{
  
    res.sendFile(path.join(__dirname +"/../view/index.html"))
}

module.exports.saveAuser=(req,res)=>{
    const {id,name}=req.body
    let newUser={
        id:id,
        name:name
    }
    users.push(newUser)
    res.send(users)
}