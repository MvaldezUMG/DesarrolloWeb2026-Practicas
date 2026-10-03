// const miPromesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve("Listo");  // éxito
//     reject("Este es mi error");  // fallo
//   }, 1000);
// });

// // Consumir
// miPromesa
//   .then(resultado => console.log(resultado))
//   .catch(error => console.error(error));

//document.body.style.backgroundColor = "blue"

const button = document.getElementById('btnSaludar')

const saludar = (mensaje)=>{
    alert(mensaje)
}

button.addEventListener('click', ()=> {saludar("Hola")})
//button.addEventListener('dblclick', saludar)
button.addEventListener('click', ()=> {saludar("Hola otra vez")})

let contador = 0
document.body.onclick = (e)=>{
    contador ++
}

const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    //Previene la accion por defecto
    e.preventDefault()
    const formValues = new FormData(form)
    if (formValues.get('name') === ''){
        alert('El nombre es obligatorio')
        return
    }
    e.target.submit()
})

function pruebaFetch(){
    //GET
    let fetchData = []
    //fetch a una direccion ip http://172.50.30.50/recurso
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((result)=>{
        
        return result.json()
    }).then((data)=>{
        const table = document.createElement('table')
        table.border= 1;
        for (let i=0; i <data.length; i++){
            const tr = document.createElement('tr')
            const td = document.createElement('td')
            td.innerText = data[i].name
            tr.append(td)
            table.append(tr)
        }
        document.body.append(table)
    }).catch(err=>{
        console.error(err)
    }) 
    //
}

async function pruebaFetchAsync (){
    //syntactic sugar 
    try {
        
        let fetchResult = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await fetchResult.json();
        
        const table = document.createElement('table')
        table.border= 1;
        for (let i=0; i <data.length; i++){
            const tr = document.createElement('tr')
            const td = document.createElement('td')
            td.innerText = data[i].name
            tr.append(td)
            table.append(tr)
        }
        document.body.append(table)
    }catch(err){
        console.error(err)
    }
}

//pruebaFetch()
pruebaFetchAsync()