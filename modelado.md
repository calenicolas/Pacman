El modelado de objetos suena a algo muy magico, digno de un ingeniero nuclear. Pero
realmente es tan trivial como describir el problema al cual querramos brindarle una solucion.

Si en nuestro problema hay un pacman, entonces es crucial modelarlo como una entidad(osea,
una clase).

```javascript
class Pacman {} // Entidad Pacman
```


Nuestras entidades van a tener comportamiento. La idea es que ese comportamiento lo 
reflejemos en las entidades como metodos de la clase que representa a la entidad 
en cuestion.

Ej: el pacman debe comerse una pelotita


```javascript
class Pacman {

    eatBall() {
        this.points.increment();
    }
}
```

Si bien esta es la forma de modelar, recordemos que lo mas importante de una clase no es 
que hace, sino mas bien como se usa. TDD nos ayuda a, antes de escribir una sola linea
de codigo, podamos tener en claro como se va a usar nuestra clase.

Ej: Un test para corroborar que cuando pacman se come una pelotita, sume sus puntos

```javascript

const points = new Points(0);
const pacman = new Pacman(points);

pacman.eatBall();

should(puntos.asInteger()).be.eql(1);
``` 

Primero escribimos el test modelando el problema. Cabe tener en cuenta que modelar no solo
la clase que querramos testar sino tambien los actores con los que interactua es de 
suma importancia (en este ejemplo, testeamos como pacman interactua con los puntos).

Si bien esto es facil y parece tonto de leer, las cosas pueden tornarse complejas. Salir
de lugares turbios (ej que el pacman empiece a sumar puntos, comer pelotitas, morir, etc) 
consiste en tener mucha experiencia haciendo esto. Pero, yo soy testigo de que hasta antes
de practicar intensamente estas formas de codear (Programacion orientada a objetos y TDD) 
escribia codigo muy feo. La practica hace al maestro. 
