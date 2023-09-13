

/* hacer un pastel

*leche
*harina
*huevos
*mantequilla
*levadura
*azucar
*sabor

*/

// Definicion de una clase - debe empezar con mayuscula

class Pastel {
    constructor(leche, harina, huevos, mantequilla, levadura, sabor) {
        this.leche = leche
        this.harina = harina
        this.huevos = huevos
        this.mantequilla = mantequilla
        this.levadura = levadura
        this.sabor = sabor
    }
// dentro de las clases podemos meter funciones, pero no es necesario meter la palabra reservada function
    figuraBluey(){
console.log("rico pastel de Bluey: " + this.sabor);
    }

    figuraBingo(){
console.log("pastel de bingo sabor: " + this.sabor);
    }

}

// para crear un objeto se usa la palabra reservada "NEW"
const pastelChocolate = new Pastel("alpura", "trigo", "1 hilo", "iberia", "cualquier", "chocolate")
//para acceder a un dato dentro de un objeto se hace mediante el operador " . "

//aqui podemos crear otro objeto, pero con las mismas propiedades de la clase original
const pasterlVainilla = new Pastel("lala", "trigo normal", 3, "margarina", "500 gr", "vainilla")


pasterlVainilla.figuraBingo()   



/*
console.log(pasterlVainilla.figuraBingo());
console.log(pastelChocolate.figuraBluey());
console.log(pasterlVainilla.harina);
*/

