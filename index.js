import express from "express"

import categoryRouter from './src/module/categories/categoriesrouter.js'
import productRouter from './src/module/products/productrouter.js'
import userRouter from './src/module/users/userrouter.js'
const app=express()
const port = 3000

app.use(express.json())

app.use(userRouter)
app.use(categoryRouter)
app.use(productRouter)
app.listen(port,()=>console.log("server running..............."))