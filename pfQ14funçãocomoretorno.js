//função como retorno e Curry
const algarismos=(x)=>{
    switch(x){
   case 0:return'zero';
   case 1:return 'Um';
   case 2:return'Dois';
   case 3:return'Três';
   case 4:return'Quatro';
   case 5:return'Cinco';
   case 6:return'Seis';
   case 7:return'Sete';
   case 8:return'Oito';
   case 9:return'Nove';
    }
    if (x >= 1 && x <= 9)
    return numeros [x];
    else
    return 'algarismo invalido';
    
    }
    const resultado=(algarismos(8))
    console.log(resultado)
