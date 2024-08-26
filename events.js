const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//customEmitter.emit //analogo al clik
customEmitter.on('respuesta', (data, secondData) =>{  //similar addEventListener
    console.log('recibido')
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('respuesta', 30, [1, 2, 3])