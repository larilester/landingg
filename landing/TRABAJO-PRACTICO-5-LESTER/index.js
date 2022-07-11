
//declaraciones
let banquitos
let mecedora
let pava
let silla
let wassily

let x
let y




//preload de las imagenes
function preload() {
    banquitos = loadImage('img/banquitos.png')
    mecedora = loadImage('img/mecedora.png')
    pava = loadImage('img/pava.png')
    silla = loadImage('img/silla.png')
    wassily = loadImage('img/wassily.png')
}

//implementacion de funciones y estructura base del canvas
function setup() {
    createCanvas(400, 400)
    background(255)


    //una misma funcion puede ser usada para cualquier imagen cargada en el codigo
    imagenRandom(banquitos)
    imagenRandom(mecedora)
    imagenRandom(pava)
    imagenRandom(silla)
    imagenRandom(wassily)

}

function draw() {

}

//construccion de la funcion
function imagenRandom(imagen) {
    //valor random de posicion x, y, tamaño de las imagenes. Centrado de imagenes en funcion de la posicion
    x = random(100, 300)
    y = random(100, 300)
    tam = random(135, 540)
    imageMode(CENTER)

    //if para aplicar diferentes efectos a las imagenes
    if (x > 200 && x < 250) {
        tint(random(100, 255), 0, 0, random(100, 255))
        image(imagen, x, y, tam, tam)
    } else if (x < 200 && x > 150) {
        filter(GRAY, 10)
        image(imagen, x, y, tam, tam)
    } else {
        image(imagen, x, y, tam, tam)
    }

}

//mousePressed para guardar captura de pantalla
function mousePressed() {
    saveCanvas()
}

