const { Router } = require('express')
const router = Router()
let  { fork }  = require('child_process')
let child_process = fork('./utils/child_process')

function serverRouter(app){
    app.use('/api', router)

    router.get('/random', (req, res)=>{
        let { cant } = req.query
        //child_process.send(cant)
        child_process.on('randoms', () => {
            child_process.send(cant)
            res.send('Ejecutaste un child_process')
        })
    })
}


/*function Random(max, min){
    return Number(Math.floor(Math.random() * (max - min)))
}

function random_calculator(cant){
    if(!cant) cant = Number(100000000)
    console.log(cant)
    let min = 1
    let numbers = []
    let repeatedOnes = {}
    for (let index = 0; index <= cant; index++) {
        const randomNumber = Random(cant, min)
        numbers.push(randomNumber) 
    }
    numbers.sort()
    //console.log(numbers)
    numbers.forEach((num) => repeatedOnes[num] = (repeatedOnes[num] || 0)+1)
    //console.log(repeatedOnes, 'repetidoss')
    return repeatedOnes
}*/

module.exports = serverRouter