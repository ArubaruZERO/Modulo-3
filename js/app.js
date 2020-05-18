// EJERCICIO PRODUCTOS --------------------------------------


 const product = { count: 3, price: 12.55, type:"ropa"};

 product.type = prompt ("tipo de producto, ropa, alimentacion, libro")


 if (product.count > 0){ 
    total = product.price * product.count  ;
 } else {
     total=0
 };

 switch (product.type){

     case 'ropa':
         console.log(total * 1.21);
         break;
     case 'libro':
         console.log(total * 1.1);
         break;
     case 'alimentacion':
         console.log(total * 1.04);
         break;

}

// ----------------------------------------------------------------



// SALARIO NETO EJERCICIO --------------------------------------

 const empleado = {
    bruto: 24000,
    hijos: 2,
    pagas: 14,
  }

 var salario = prompt("introduce tu salario");

 var hijos = prompt("cuantos hijos tienes")



if (salario < 12000 && hijos > 0){
    console.log(salario)
} else if (salario < 12000 && hijos === 0){
    console.log (salario)
} else if (salario > 12000 && salario < 24000  && hijos > 0){
    console.log( (salario - (salario*0.08) )* 1.02)
} else if (salario < 12000 && hijos === 0){
    console.log (salario - (salario*0.08) )
} else if (salario > 24000 && salario < 32000 && hijos > 0){
    console.log( (salario - (salario*0.16) )* 1.02)
} else if (salario < 12000 && hijos === 0){
    console.log (salario - (salario*0.16) )
} else if (salario >32000 && hijos > 0){
    console.log( (salario - (salario*0.3) ) * 1.02)
} else {
    console.log (salario - (salario*0.3) )
};

 

// ----------------------------------------------------------------


















