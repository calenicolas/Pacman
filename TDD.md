**Constraints / Reglas**
- NUNCA escribir código productivo (fuera de la carpeta test) sin antes
escribir un test y verlo fallar.
- Si hay tests fallando, tomar siempre el camino mas corto para hacerlos 
pasar. Siempre de a un caso por vez.
- Respetar la regla del *Given, When, Then*

    *Given*: Contexto de la prueba. Ej: El pacman esta en x => 3; y => 0.
    
    *When*: Ejecucion a probar. Ej: El pacman se mueve a la derecha.
    
    *Then*: Comportamiento esperado. Ej: El pacman debe informar que su posicion es 
    x => 4; y => 0.

**Sugerencias**
- Tomar casos de prueba puntuales, concretos y pequeños. Al principio van a parecer obvios y tontos. _Es la idea!_ El desarrollo de software es obvio y tonto. Facil y rápido. 
- Arrancar por un test bien simple y hacerlo pasar devolviendo lo enunciado en el *Then* del 
test. 
Una vez que lo hagas pasar, escribir un caso relacionado al caso anterior para hacerlo 
fallar (triangulacion de tests)

**Ejemplo**

El pacman debe moverse 1 posicion:
```javascript
const pacman = new Pacman() <- Esto es el given

pacman.moveUp() <- Esto es el when

const position = pacman.getPosition();

should(position).be.eql({
    x: 0,
    y: 1
}) <- Esto (en conjunto con la linea de arriba que nos devuelve la posicion y la guarda 
en la variable position) es el then
```
