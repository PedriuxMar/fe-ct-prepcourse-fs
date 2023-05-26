/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var clave=Object.keys(objeto);
   var array=[];
   var a=[];
   clave.forEach(clave => {
      array.push(a=[clave,objeto[clave]]);      
   });
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   var letras=string.split("");
   letras.sort();
   var c=1;
   let i=0;
   do {
      if(letras[i]===letras[i+1]){
         c++;
      }
      else{
         objeto[letras[i]]=c;
         c=1;
      }
      i++;
   }while (i<letras.length);
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var letras = string.split("");
   var min=[];
   var may=[];
   letras.forEach(char=>{
      if(char===char.toUpperCase()){
         may.push(char);
      }
      else{
         min.push(char);
      }
   });

   return may.join("") + min.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras=frase.split(" ");
   var final=[];
   palabras.forEach(p=>{
      var palabra=p.split("");
      var array=[];
      palabra.forEach(c=>{
         array.unshift(c);
      });
      final.push(array.join(""));
      final.push(" ");

   });
   final.pop();
   return final.join("");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var string=numero.toString();
   var array=string.split("");
   var capi=true;
   for(let i=0; i<array.length/2; i++){
      if(array[i]!=array[array.length-i-1]){
         capi=false;
      }
   }
   if (capi)
      return "Es capicua";
   else 
      return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array=string.split("");
   var i=0;
   var retorno=[];
   array.forEach(letra=>{
      if (letra!="a" && letra!="b" && letra!="c" && letra!="A" && letra!="B" && letra!="C"){
         retorno.push(letra);
      }
   });
   return retorno.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var min=0;
   var word=arrayOfStrings[min];
   var resultado=[];
   do{
     for (let index = 0; index < arrayOfStrings.length; index++) {
         if (arrayOfStrings[index].length<arrayOfStrings[min].length){
            min=index;
            i=0;
         }
      } 
      resultado.push(arrayOfStrings[min]);
      arrayOfStrings.splice(min,1);
      min=0;
   }while(arrayOfStrings.length>0);
   return resultado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   array1.includes(array2[0]); 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
