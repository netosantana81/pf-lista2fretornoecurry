//função como retorno e curry
const fquantosIguais =(a)=>(b)=>(c) =>{
    if (a == b && b == c && c == a)
    return "todos são iguais"
      else  if (a != b && b != c && a != c)
    return "todos diferentes"
     else
    return "apenas um diferente"
    }  
   const res1=fquantosIguais(7)(8)(9)
   console.log(res1)