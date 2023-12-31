class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    saludar() { 
      console.log(`Hola,${this.nombre}. soy un animal llamado `); // recordar que la comilla invertida se utiliza para combinar un texto con una variable y que el simbolo $ sirve para hacer una referencia a un variable de forma directa
      //console.log("hola, soy un animal llamado" , this.nombre);    tecnicamente es lo que el proceso de concatenacion normal, pero es mas limpia y elegante
      //console.log("hola, " + this.nombre + "soy un animal llamado");
    
    }

  }
  
  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre); // Llama al constructor de la clase padre
      this.raza = raza;
    }
  
    saludar() {
      console.log(`Guau, guau, soy un perro llamado ${this.nombre} de raza ${this.raza}.`);
    }
  }
  
  class Gato extends Animal {
    constructor(nombre, color) {
      super(nombre); // Llama al constructor de la clase padre
      this.color = color;
    }
  
    saludar() {
      console.log(`Miau, soy un gato llamado ${this.nombre} de color ${this.color}.`);
    }
  }
  
  const miPerro = new Perro("Fido", "Labrador");
  const miGato = new Gato("Garfield", "naranja");
  
  miPerro.saludar(); // Salida: Guau, guau, soy un perro llamado Fido de raza Labrador.
  miGato.saludar();  // Salida: Miau, soy un gato llamado Garfield de color naranja.
  

  // crear funcion para sumar dos numeros 
  function sumar(a, b) {
      return a + b
  }


  