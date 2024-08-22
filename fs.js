const fs = require('fs') //file system

/* const first = fs.readFileSync('./data/first.txt', 'utf-8')

const second = fs.readFileSync('./data/second.txt') 

fs.writeFileSync('./data/third.txt', 'este es el tercer archivo') */ // se crea un archivo en la carpeta del primer parámetro con ese nombre con el texto del segundo parámetro. Se puede pasar como una variable tambien: const texto = 'este es el tercer archivo'. Se puede sobreescribir o se le pueden agregar textos

/* const texto = ' agregando texto'

fs.writeFileSync('./data/fourth.txt', texto, {
    flag: 'a'
})

console.log(first)
console.log(second.toString()) */

fs.readFile('./data/second.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err)
    }
    
    console.log(data)

    fs.writeFile('./data/newfile.txt', 'asdjhadsjadsja', 'utf-8', (err, data)=>{
        if(err){
            console.log(err)
        }
        console.log(data)

        fs.writeFile('./data/newfile.txt', 'asdjhadsjadsja', 'utf-8', (err, data)=>{
            if(err){
                console.log(err)
            }
            console.log(data)
            
        })

    })//callback hell
    

})