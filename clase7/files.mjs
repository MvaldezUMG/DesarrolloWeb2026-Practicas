import fs from 'fs';
import fsPromises from "fs/promises";

function asincrona(){
//API Asincrona
    fs.readFile("datos.txt", "utf-8", (err, data)=>{
        //Cuando los datos esten listos 
        if (err){
            console.error(err)
            return
        }
        console.log("datos1.txt", data)
    })
    fs.readFile("datos2.txt", "utf-8", (err, data)=>{
        //Cuando los datos esten listos 
        if (err){
            console.error(err)
            return
        }
        console.log("datos2.txt", data)
    })
    
    //console.log("Finalizado con", data)
}
function sincrona(){
    let data = fs.readFileSync("datos.txt", "utf-8")
    console.log(data)
}

async function promises(){
 try{
    const data = await fsPromises.readFile("datos.txt", "utf-8");
    console.log(data)
 }catch(err){
    console.error(err)
 }
}

//asincrona()
//sincrona()
promises()