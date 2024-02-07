console.log('Hola Mundo') // este es un comentario
console.log('javaScript')

//funcion para ordenar una lista
function quicksort(lista){
    if (lista.length <= 1){
        return lista;
    }
    let pivote = lista[0];
    let izquierda = [];
    let derecha = [];
    for (let i = 1; i < lista.length; i++){
        lista[i] < pivote ? izquierda.push(lista[i]) : derecha.push(lista[i]);
    }
    return quicksort(izquierda).concat(pivote, quicksort(derecha));
}
let numbers = [23, 45, 16, 37, 3, 99, 22];
let listaOrdenada = quicksort(numbers);
console.log(listaOrdenada);

//Bucle for
let numeros = [23, 45, 16, 37, 3, 99, 22];
function multiplicar(primero, segundo){
    console.log(primero * segundo);
}
for (let numero of numeros){
    multiplicar(numero, 2);
}

//Bucle while
let entero = 100;
let emergencia = 105;

while (entero <= emergencia){
    console.log(entero);
    entero++;
}

// POO. programacion orientada a objeto
let javascript = {
    nombre: 'JavaScript',
    año: 1995,
    descripcion: function () {
        console.log(`${this.nombre} fue creado en ${this.año}`);
    }
};

javascript.descripcion();

//Clases
class Lenguaje {
    constructor(nombre, año){
        this.nombre = nombre;
        this.año = año;
    }
    descripcion(){
        console.log(`${this.nombre} fue creado en ${this.año}`);
    }
}
let javaScript = new Lenguaje('JavaScript', 1995);
javaScript.descripcion();
let html = new Lenguaje('html', 1993);
html.descripcion();
let css = new Lenguaje('css', 1996);
css.descripcion();