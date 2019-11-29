# Pacman


https://www.youtube.com/watch?v=dScq4P5gn4A

Documentos de ayuda:
- [TDD. Como escribo los tests ?](./TDD.md)
- [Modelado. Que represento para hacer pasar los tests ?](./modelado.md)


## **Como me bajo esto ?**

### 1) Infra basica: Instalar Node JS
Instalate un linux, una vez que lo tenes abris la consola y 


*sudo apt update*


*sudo apt upgrade*


*sudo apt-get install curl*


*curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -*


*sudo apt-get install nodejs*


Listo


*node -v*


Si eso te devuelve algo, tenes node instalado

### 2) Infra para bajarnos el proyecto y poder subit camibios: Git


*sudo apt install git*


*mkdir workdir*


*cd workdir*


*git clone https://github.com/calenicolas/pacman.git*


### 3) Infra especifica de nuestro proyecto: npm

en la misma consola que hicimos el git clone, hacemos


*cd pacman*


*npm install*


*npm run test*


Deberia correr todo. 

**NOTA: Si no instalas linux de forma persistente, cada vez que reinicies desde el pendrive vas a tener que
correr todos esos comandos.**
