const express = require('express')
const mongoose = require('mongoose')
const app = express()

// app.use(express.json)

// mongoose.connect('mongodb://localhost:27017/express-test', {useNewUrlParser: true, useUnifiedTopology: true})

// const Product = mongoose.model('Product', new mongoose.Schema({title: String}))
// Product.insertMany([
//     {title: '产品1'}
// ])

app.use(require('cors')())

// app.get('/', (req, res)=> {
//     res.send({
//         user: 'xiaolu'
//     })
// })

// app.get('/products', async (req, res) => {
//     res.send(await Product.find())
// })

// app.post('/products', async (req, res)=>{
//     let data = req.body
//     console.log(data)
//     res.send(data)
// })

app.get('/xiaolu',  (req, res)=>{
    res.send({
        user: 'xiaolu'
    })
})


app.use(express.static('public'))

app.listen(4000, ()=>{
    console.log('app listening on port 4000!')
})