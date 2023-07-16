//função como retorno e curry
const  fcitar = (x)=>(y) => `${y},${x[0]}.`
const a= "Mary"
const b= "Jane"
const res1=fcitar(a)(b)
console.log(res1)
