import os from "os";

console.log("Plataforma:", os.platform());   // linux, darwin, win32
console.log("CPU:", os.cpus().length, "núcleos");
console.log("Memoria libre:", (os.freemem() / 1024 / 1024).toFixed(0), "MB");
console.log("Hostname:", os.hostname());
console.log("otra cosa mas")