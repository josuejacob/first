// function prueba(oracion) {

//     document.write('Hola mundo de Jacob')
//     document.write('<br>')
//     document.write(oracion)

// }

// prueba('Hola a todo mundo y ');
// prueba('NUEVA PÁGINA WEB');

// AQUI CALCULAMOS EL INDICE DE MASA CORPORAL USANDO FUNCIONES
// 

// function calcularImc(peso,altura,nombre)  {
//     var imc = peso / altura
//     document.write('El índice de masa corporal de ' + nombre + ' es ' + imc);
// }

// calcularImc(68,1.71,"Jacob");

//HACEMOS USO DE PROMPT PARA INGRESAR DATOS Y LEERLOS

// nomb = prompt('Ingresa tu nombre:');
// weight = parseInt(prompt('Ingresa tu peso'));
// height = parseInt(prompt('Ingresa tu altura'));

// function calculo(peso,altura) {
//     let imc =  peso / (altura*altura)
//     return(imc);
// }

// function escribir(nombre){
//     document.write('El índice de masa corporal de '+ nombre + ' es ' + calculo(weight,height));
// }

// escribir(nomb);

/// JUEGO DE ADIVINACIÓN CON MATH.RANDOM Y UTILIZANDO IF ELSE

// var numeroPensado = Math.round(Math.random()*10);
// var numeroUsuario = parseInt(prompt('Piensa en un número e ingresalo a continuación:'));

// if (numeroUsuario == numeroPensado) {
//         document.write('Felicidades, has adivinado el número pensado por la computadora');
// } else {
// document.write('El número no es le mismo, el número correcto es el '+ numeroPensado)
// }

// TABLA DE MULTIPLICAR CON FOR

// var multiplicador = 1;

// for (multiplicador; multiplicador<=11; multiplicador++) {
//     document.write(multiplicador*5);
// }
