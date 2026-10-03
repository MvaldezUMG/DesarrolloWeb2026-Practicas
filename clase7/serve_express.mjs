import express from 'express';

import Sumar, {Restar} from './packages/sumar.mjs'

const app = express();

//Para que el body se convierta automaticamente a json
app.use(express.json());

//Middleware para logger
const logger = (req, res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next()
}
// app.use((req, res,next)=>{
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//     next()
// })

const validarHeader = (req,res, next)=> {
  const header = req.headers["x-mi-header"]
  if (header !== "x-valor"){
    res.status(401).json({"message":"Not authorized"})
  }
  //Saltar al siguiente handler
  next()
}

app.get("/", logger, validarHeader, (req, res)=> {
    res.json({ mensaje: "Hola Express" });
});

app.get("/usuarios", (req, res)=> {
    res.json([{"nombre": "Marco"}]);
});

app.post("/usuarios", (req, res) => {
  res.status(201).json({ creado: req.body });
});

console.log(Sumar(1,4))

console.log(Restar(1,4))
app.listen(3500, () => console.log("API en :3500"));
