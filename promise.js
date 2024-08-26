const { readFile } = require("fs/promises");
//const {promisify} = require('util') lo reemplazo con fs/promises que vuelve a read file en una promesa



/* Esto se llama promisify const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}; */

//const readFilePromise = promisify(readFile) //reemplaza la Promise

// async y await para utlizar menos código
const read = async () => {
  try {
   /*  throw new Error('esto es un error que no se esperaba') creamos un error a veces el modulo lo genrea solo y no hace falta como en este ejemplo*/
    const result = await readFile("./data/first.txt", "utf-8");
    console.log(result);
    const result2 = await readFile("./data/fourth.txt", "utf-8");
    console.log(result2);
    const result3 = await readFile("./data/third.txt", "utf-8");
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
};
read();
/* getText('./data/fourth.txt')
.then((result) => console.log(result))
.then(()=> getText('./data/first.txt'))
.then((result) => console.log(result))
.catch((error) => console.log(error)) es mejor que los caalback de abajo  */

/* new Promise((resolve, reject)=>{
    readFile('./data/first.txt', 'utf-8', (err, data) =>{
        if(err){
            reject(err)
        }
        resolve(data)
    }) 
})
 */
/* 
readFile('./data/first.txt', 'utf-8', (err, data) =>{
    if(err){
        console.log(err)
    }
    console.log(data) función asincrona dada por node 'fs'
}) */
