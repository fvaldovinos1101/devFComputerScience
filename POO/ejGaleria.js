

// crear galeria de fotos

class Imagen {
    constructor(titulo, tamaño, fecha, resolucion, formato) {
        this.titulo = titulo
        this.tamaño = tamaño
        this.fecha = fecha
        this.resolucion = resolucion
        this.formato = formato
    }

    getTitulo() {                                         //funcion return sirve para mostrar un resultado de la salida
        return `la imagen se llama  ${this.titulo}`       // las comillas invertidas ` sirven para combinar un texto con una variable, para identificar la variable, la sintaxis es el signo de $ con llaves
        }                                                       // es lo mismo que hacer la concatenacion normal, solo que es menos tediosa de realizar, ver ejemplo de diferencia en el ejercicio de HERENCIA
}



//2. crear el objeto con el comando NEW

//aqui estamos creando un objeto con base a clase, esto se llama instanciar
const img1 = new Imagen("foto de windows", "1200*900", "12-04-09", "4k", "png");
const img2 = new Imagen("perro", "1200*1200", "30-08-2023", "4k", "png");
const img3 = new Imagen("gato", "800*900", "28-08-2023", "4k", "GIF");
const img4 = new Imagen("Perico", "2400*2400", "11-01-2023", "4k", "png");
const img5 = new Imagen("Mis_Plantas", "1200*900", "31-08-2023", "4k", "JPEG");


// los objetos creados se pueden guardar como un arreglo, que si recordamos al definicion es una coleccion de datos ordenada
let galeria = [img1, img2, img3, img4, img5]

for (let i = 0; i < galeria.length; i++) {
    console.log(galeria[i].titulo);    // para acceder a un elemento necesitamos usar los corchetes.
}

/*
// hay una version mas simplificada del for
galeria.forEach(item => {
    console.log(item.titulo);
});
*/