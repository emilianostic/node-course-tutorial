/* const myModules =require('./module/myModule')
con const {} puedo importar individualmente lo que necesite de myModule
console.log(myModules) */
const math =require('./math/index')

console.log(math)
console.log(math.add(10, 20)) 
console.log(math.multiply(10, 20) )
console.log(math.substract(10, 20)) 
console.log(math.divide(10, 20) )