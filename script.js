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