//função como retorno e Curry

const menorvalor= (v1)=>(v2)=> {
    if (v1 < v2) 
    return v1 
    else return v2
   } 
    const a= 5
    const b= 2
    const c= 4
   
  const resultado = menorvalor(a)(menorvalor(b)(c))  

console.log(resultado)