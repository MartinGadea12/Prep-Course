// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimoElemento = array[array.length -1]; 
  return ultimoElemento; 

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
   return array.length;
  


}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var Incremento = [];
  for (i = 0; i < array.length; i++){
    Incremento.push(array[i]+1)
  }
  return Incremento;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
 return palabras.join(" ");
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)) {
    return true
  } else {
    return false
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  Suma = 0;
  for (i = 0; i < numeros.length; i++){
  Suma = Suma + numeros[i] 
}
  return Suma;
  
}
      
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var Promedio = 0;
  for (i = 0; i < resultadosTest.length; i++){
    Promedio += resultadosTest[i] 
  }

  return Promedio / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var NumGrande = numeros[0];
  for (i = 1; i < numeros.length; i++) {
   if (numeros[i] > NumGrande ) {
    NumGrande = numeros[i]
  } 
  }
 return NumGrande
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí: 
 if (arguments.length === 0){
  return 0
 } else if (arguments.length === 1) {
  return arguments[0]
 } 
 var mult = 1;
 for (i = 0; i < arguments.length; i++) {
 mult = mult * arguments[i] 
 }
 return mult
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // [4,5,19,3]
  //  0 1 2  3
  var acumulador = 0;
  for (i = 0; i < arreglo.length; i++) {
   if (arreglo[i] > 19) {
    acumulador++
   }
  }
return acumulador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  //1 domingo; 2 lunes ; 3 martes; 4 miercoles ; 5 jueves ; 6 viernes ; 7 sabado

  if (numeroDeDia > 1 && numeroDeDia < 7) return "Es dia Laboral";
  else {
    return "Es fin de semana"
  }

  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var Str = n.toString()
  if (Str[0] === "9" ) return true 
  else {
    return false 
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i + 1] === arreglo[i]) {
     
      return true
}
      else return false
} 
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var NuevoArr = []
   for (i = 0; i < array.length; i++) {
     if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
        NuevoArr.push(array[i]) 
         
} 
        
} 
if (NuevoArr.length === 3 ) {
  return NuevoArr;
} else {
  return "No se encontraron los meses pedidos"
}

 
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  NuevoArr = [];
  for (i = 0; i < array.length; i++){
    if (array[i] > 100) {
      NuevoArr.push(array[i])
    }
  

  }
  return NuevoArr;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
   //   3   4   7  9
  //    1 , 2 , 5, 7
  //    0   1   2  3   4 
  var Mult = 2;
  NuevoArr = [];
  for (i = 1; i <= 10; i++){
    NuevoArr.push(numero + Mult) 
    Mult += 2
    if (numero + Mult === i + 1){
    return "Se interrumpió la ejecución"
    break 
}
 } 
    return NuevoArr;
  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
