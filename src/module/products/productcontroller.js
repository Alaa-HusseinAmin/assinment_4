import { query } from "./../../../database/databaseconnection.js";


export const addproduct=(req,res)=>{
    const {name,description,price,createdby}=req.body
    query.execute(`insert into products (name,description,price,createdby) values('${name}','${description}','${price}','${createdby}')`)
    res.json({message:"success"})
}

export const deleteproduct=(req,res)=>{
    const {id}=req.body
    query.execute(`delete from products where id =${id}`,(err,result)=>{
    if(err){
        res.json({message:"error"})
    }else{
        res.json({message:result})
        console.log(result.affectedRows)
      }
    })
}

export const getallproducts=(req,res)=>{
    query.execute("Select * from products", (err, data) => {
        res.json({ message: "success", data });
      });
}

// error affected rows
export const updateproduct=(req,res)=>{
    const {id,name,description,price,createdby}=req.body
    query.execute(`Update products set name ='${name}', description='${description}', price='${price}' where id =${3} && createdby ="Esraa"`,(err,result)=>{
        if(err){
            res.json({message:"error"})
        }else{
            res.json({message:result})
            console.log(result.affectedRows)
          }
    })
}

export const searchproduct=(req,res)=>{
    const {name}=req.body
    query.execute(`select * from products where name="Skirt"`,(err,data)=>{
        if(err){
            res.json({message:"error",err})
        }else{
            res.json({message:"success",data})
        }
    })
}

export const getproductusercategory=(req,res)=>{
    query.execute("Select users.name,categories.name,products.name,products.description,products.price from users join categories join products ON users.id && categories.id = products.user_id && products.category_id ", (err, data) => {
        res.json({ message: "success", data });
      });
}