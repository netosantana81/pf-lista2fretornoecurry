//função como retorno e Carry
const definirtriangulo= (la)=>(lb)=>(lc)=> {
    if (la == lb && la == lc && lb== lc ) 
    return " Equilatero"
   if ( la!== lb && la !== lc && lb !== lc) 
        return "Escaleno"
     else  
    return "Isósceles"
   
    }
    const res1=definirtriangulo(2)(4)(4)
    console.log(res1)