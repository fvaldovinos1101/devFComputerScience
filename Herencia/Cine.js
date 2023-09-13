class Cine { //clase padre
    constructor(video) {
        this.video = video
    }

    reproducir() {
        console.log("play... ", this.video);
    }
}



// subclases o clases hijo

class Documental extends Cine { //palanra reserbada extends para por que le vamos a indicar que vamos a heredar propiedad del la clase padre CINE
    constructor(video, duracion) {
        super(video) //metodo super se usa cuando vamos a heredar una propiedad de una clase en este caso la clase PADRE anterior CINE, aqui heredamos VIDEO
        this.duracion = duracion
    }

    // sobre escritura de metodos - override 
    reproducir(){
        console.log("playX2 =  ", this.video)
    }
}

class Pelicula extends Cine {
    constructor(video, genero) {
        super(video)
        this.genero = genero
    }

}

const planetaTierra = new Documental("planetaTierra.mov" , "1:25:10")
planetaTierra.reproducir()