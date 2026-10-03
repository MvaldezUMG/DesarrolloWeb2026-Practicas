const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "Sofía" }
];

// find: primer elemento que cumple
const ana = usuarios.find(u => u.nombre === "Ana");

console.log(ana)

const pedro = usuarios.find(u=> u.nombre === "Pedro");
console.log(pedro)

const luis = usuarios.findIndex(u=> u.nombre === "Luis")
console.log(luis)

const juanito = usuarios.findIndex(u=> u.nombre === "Juanito")
console.log(juanito)

function findUsuario(user, filter, value){
    return user[filter] === value
}

const ana2 = usuarios.find((u)=> findUsuario(u, 'id', 1))

const ana3 = usuarios.find((u)=> findUsuario(u, 'nombre', 'Ana'))

console.log(ana2,ana3)

const ana4 = usuarios.filter(u=> u.id === 1)
console.log(ana4)

function map(){
    let values = [1,2,3,4,5,6,7,8,9]
    let result = values.map(e=> {
        return Math.pow(e, 2)
    })
    console.log(result)

    let usuariosMapped = usuarios.map(u=> ({
        conectado: false
    }))
    console.log(usuariosMapped)
}


function slice(){
    const letras = ["a", "b", "c", "d", "e"];

    // slice(inicio, fin): sub-arreglo (NO modifica el original)
    const parte = letras.slice(1, 2);
    console.log(parte);

    const eliminados = letras.splice(1, 2);
    console.log(eliminados); // ["b", "c"]
    console.log(letras);     // ["a", "d", "e"]
}

function arreglos(){
    const arreglo = [1,2,3,4,5];
    const arreglo2 = [...arreglo];
    arreglo2[2]= 1000

    console.log(arreglo, arreglo2)
    return arreglos
}

obe = {
    1: "Hola",
    arreglo: [1,5,7]
}
copia = {...obe}
copia['arreglo'][2] = 1000
console.log(obe, copia)

map()
slice()
result =arreglos()



const persona = {
  nombre: "Ana",
  edad: 25,
  "hola mundo": "Hola",
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
};

// Acceder
console.log(persona.nombre);     // "Ana"
console.log(persona["nombre"]);   // "Ana"
console.log(persona.saludar());   // "Hola, soy Ana"
console.log(persona["hola mundo"])

// Agregar / modificar
persona.email = "ana@mail.com";
persona.edad = 26;


intervalCallback = function(){
    
    console.log("hola estudiante")
}

setInterval(intervalCallback, 1000)