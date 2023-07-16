//função como retorno e curry
const xor = (x)=>(y)=> {
    return (x || y) && !(x && y)
 }
 const v1 = true
 const v2 = true 
 const res1=xor(v1)(v2)
 console.log(res1)
 