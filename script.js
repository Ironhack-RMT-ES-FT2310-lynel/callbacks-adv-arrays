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