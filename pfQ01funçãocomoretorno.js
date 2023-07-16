//função como retorno
const A =( base ) => (altura) => base * altura 

const areatriangulo =(A(2)(4))


//Compor texto na saída para ajudar o usuário

const texto = `O tamanho da área do retângulo é ${areatriangulo} .`
console.log(texto)