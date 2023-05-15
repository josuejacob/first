
// const user = {
//     name: 'Josue',
//     lastname: 'Jacob',
//     age: 25,
//     adress : {
//         country : 'Mexico',
//         state : 'Morelos',
//         city : 'Cuernavaca',
//         stret : 'Paseo Chetumal'
//     },
//     hobbies: ['Futbol', 'Cine', 'Cine y Futbol'],
//     getInfo: function () {
//         return this.name + ' ' + this.lastname + ' tiene ' + this.age + ' años y viven en ' + this.adress.state + ', ' + this.adress.city + ', ' + this.adress.country
//     }
// }

// console.log(user.getInfo());


// const nombre = 'Josue';
// const edad = 24;

// const person = {
//     nombre,
//     edad
// }

// console.log(person.edad);



// const title = document.createElement('h1');
// title.innerText = 'Escribir en html'

// const button = document.createElement('button');
// button.innerText = 'click'

// button.addEventListener("click", function() {
//     const p = document.createElement('p');
//     p.innerText = 'Hola mundo html'
//     document.body.appendChild(p);
// })

// document.body.append(title);
// document.body.append(button);



// const user = {
//     name: 'Josue',
//     lastname: 'Jacob',
//     age: 24,
// }

// function printInfo(user) {
//     return "<h1>Hola " + user.name + ' ' + user.lastname + ' </h1'
// }

// document.body.innerHTML = printInfo(user);


// FUNCIONES SIN NOMBRE DENTRO DE EVENTOS

const button = document.createElement('button')
button.innerText = 'Haz click aquí'

button.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerText = 'Hola nana en html'
    document.body.appendChild(p);
})

document.body.append(button);