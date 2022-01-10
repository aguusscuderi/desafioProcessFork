console.log('PROCESO HIJOOO')

process.on('randoms', data =>{
    //process.send({res: data})
    console.log(data)
    process.send(random_calculator(data))
})

function Random(max, min){
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
}



