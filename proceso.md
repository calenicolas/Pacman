El proceso de desarrollo (desde mi punto de vista, esto es muy amplio y discutible)
siempre comienza desde los tests. 

A partir de un par de tests pasando, intento llevar lo mas basico a un _ambiente de pruebas
empiricas_ (algun lado que me permita jugar con el bicho). En nuestro caso es el index.js

La idea es jugar con el ambiente de pruebas empiricas y ver que es lo que le falta a nuestro
producto. Lo primero que detectemos, vamos a dejar de probar empiricamente y escribir un
test que falle, demostrando que programaticamente podemos representar el problema.

Y con el test rompiendo, lo unico que queda es hacerlo pasar.

Cuando pasa, se repite el proceso. Probamos empiricamente y seguimos descubriendo casos a 
cubrir. Acto seguido escribimos los tests para solucionarlo. Y asi infinitamente.  
