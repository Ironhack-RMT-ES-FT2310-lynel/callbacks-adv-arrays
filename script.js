console.log("probando")


// Callbacks


// ref 1234
function decirHola( name ) {
  return `Hola ${name}`
}

console.log( decirHola() )

function decirEdad( num ) {
  return `Tienes ${num}de edad`
}

function funcionQueAceptaAOtraFuncion( unaFuncion, parametro ) {
  // let unaFuncion = decirHola // asigna la misma referencia ref 1234
  console.log("dentro de funcionQueAceptaAOtraFuncion", unaFuncion(parametro))

}


funcionQueAceptaAOtraFuncion( decirHola, "Antonio" )
funcionQueAceptaAOtraFuncion( decirEdad, 20 )

funcionQueAceptaAOtraFuncion( decirHola, "Alejandro" )
funcionQueAceptaAOtraFuncion( decirEdad, 19 )



// forEach



let randomNumbers = [ 4, 8, 15, 16, 23, 42 ];



// const testFuncion = 

// randomNumbers.forEach( (elNumero, index, arr) => {
//   // no hace nada con un return
//   // el forEach hace una ejecucion por cada elemento del array
//   console.log("ejecutando funcion", elNumero, index, arr)
// } )


randomNumbers.forEach( (eachNumber) => {


  // console.log(eachNumber * 1000)
  if ( eachNumber === 42) {
    console.log(eachNumber, "la respuesta a la vida, el universo y todo lo demas")
  } else {
    console.log(eachNumber, "cualquier numero random")
  }

} )

// bucle tradicional para compara el forEach
for (let i = 0; i < randomNumbers.length; i++) {

  if ( randomNumbers[i] === 42) {
    console.log(randomNumbers[i], "la respuesta a la vida, el universo y todo lo demas")
  } else {
    console.log(randomNumbers[i], "cualquier numero random")
  }

}


// crear un nuevo array donde los numeros esten multiplicados por 100


let nuevoArray = randomNumbers.map( (number, index) => {
  // map tambien ejecuta la funcion por cada elemento
  console.log(number * 100)
  // espere recrear un nuevo array con cada uno de los elementos modificados. Deben ser retornados.
  if (number < 10) {
    return number * 100
  } else {
    return number
  }
} )

console.log(nuevoArray)



// crear una funcion que reciba un array de numeros y creen un array de mensajes

function convertToString( numbersArr ) {

  let stringsArr = numbersArr.map((element, index) => {

    return `El numero ${index} es: ${element}` // hace un push al array

  })

  return stringsArr

}


console.log( convertToString(randomNumbers) )


// Filter

let cars = [
  { brand: "Mercedez", year: 2012, weight: 0.8  },
  { brand: "Porsche", year: 2010, weight: 1 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Seat", year: 2015, weight: 0.6 },
  { brand: "Porsche", year: 2020, weight: 1.8 },
]

// crear un array solo con los coches de 2012 en adelante

let filteredCars = cars.filter( (eachCar) => {
  console.log(eachCar)
  // filter espera que le retornemos un booleano
  if ( eachCar.year >= 2012 ) {
    // true => agregalo al array
    return true
  } else {
    // false => no lo agregues al array
    return false
  }

  // o...
  // return eachCar.year >= 2012

} )

console.log(filteredCars)


// BONUS => .find()

// el filter siempre nos arroja un array con todas las busquedas
// el find siempre nos arroja el primer elemento del array que consigue

let foundCar = cars.find((eachCar) => {
  return eachCar.brand === "Porsche"
})

console.log(foundCar)
