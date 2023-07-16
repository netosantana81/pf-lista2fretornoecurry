//função como retorno e curry
const distancia= (ponto1)=>(ponto2)=> (( ponto2.x - ponto1.x )**2 + ( ponto2.y - ponto1.y )**2) ** (1/2)
const A = {
    x : 1,
    y : 5     
}
const B ={ 
    x: 4,
    y: 1
}

const res1=distancia(A)(B)

console.log(res1)
