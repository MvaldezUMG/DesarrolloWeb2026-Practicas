//Debemos ejecutar nuestro programa con --env-file
//node --env-file=.env env.mjs

let secret = process.env.SECRET;

console.log(secret)