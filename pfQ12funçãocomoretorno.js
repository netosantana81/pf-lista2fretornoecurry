//função como retorno e Curry
const fraizes= (a)=>(b)=>(c)=>(r)=> { 
    const delta = b**2 - 4*a*c
    if (r>0) return ((-1)*b + Math.sqrt(delta))/(2*a)
    else return ((-1)*b - Math.sqrt(delta))/(2*a)
}
const a=1
const b=4
const c=-21

const raiz1 = fraizes(a)(b)(c)(-1)
const raiz2 = fraizes(a)(b)(c)(1)
     
     console.log(`As raízes da equação são ${raiz1} e ${raiz2}.`)