const express=require('express')
const bodyParser=require('body-parser')
const userRouter=require('./routes/user.route')
const app=express()
const PORT=3000

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(userRouter)


app.use((req,res,next)=>{
    res.status(404).send({
        message:'route not found',
        success:true
    })
})

app.listen(PORT,(req,res)=>{
    console.log(`sever is running on ${PORT}`)
})