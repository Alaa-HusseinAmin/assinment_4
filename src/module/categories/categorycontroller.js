import { query } from "./../../../database/databaseconnection.js";

export const addcategory=(req,res)=>{
    const {name,createdby}=req.body
    query.execute(`insert into categories (name,createdby) values('${name}','${createdby}')`)
    res.json({message:"success"})
}
export const deletecategory=(req,res)=>{
    const {id}=req.body
    query.execute(`delete from categories where id =${id}`,(err,result)=>{
    if(err){
        res.json({message:"error"})
    }else{
        res.json({message:result})
        console.log(result.affectedRows)
      }
    })
}
export const getallcategory=(req,res)=>{
    query.execute("Select * from categories", (err, data) => {
        res.json({ message: "success", data });
      });
}
//error affected rows
export const updatecategory=(req,res)=>{
    const {id,name,createdby}=req.body
    query.execute(`Update categories set name ='${name}' where id =${5} && createdby ="Ahmed"`,(err,result)=>{
        if(err){
            res.json({message:"error"})
        }else{
            res.json({message:result})
            console.log(result.affectedRows)
          }
    })
}
