import { query } from "./../../../database/databaseconnection.js";

export const signup=(req,res)=>{
    const {name,email,password}=req.body
    query.execute(`SELECT * from users where email ='${email}'`,(err,[data])=>{
        if(data){
            res.json({"message":"User already exist"})
        }else{
            query.execute(`insert into users (name,email,password) values('${name}','${email}','${password})')`)
            res.json({message:"success"})
        }
    })
}

///
export const signin=(req,res)=>{
    const {email,password}=req.body
    query.execute(`Select * from users where email='${email}'`,(err,[data])=>{
        console.log(data)
        if(data==undefined){
            res.json({message:"email not found"})
        }else{
            if (password==data.password){
                res.json({message:"success",userId:data.id})
            }else{
                res.json({message:"incorrect password"})
            }
        }
    })
}

