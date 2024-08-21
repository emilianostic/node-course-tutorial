const path = require('path') //permite importar un archivo y ejecuta dad lógica de acuerso al SO en el que estemos
//metodo join de path path.join para que te de una ruta valida al archivo dependiendo el SO 

//console.log(path)

const filePath = path.join('/public', 'dist', 'styles', 'main.css')
console.log(filePath)
console.log(path.basename(filePath)) //basename da el archivo al final de la ruta