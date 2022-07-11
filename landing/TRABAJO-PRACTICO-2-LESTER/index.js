let x
let y
let c
let w
let w2


//la foto es con la ventana a la mitad, se aprecia mejor el dibujo. De todas formas se puede poner pantalla completa
function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
  
}


function draw() {
    frameRate(24)
 //asignaciones
    x = random(100, width - 100)
    y = random(0, height)
    c = random(0, 255)
    w = random(.5, 3)
    w2 = random(3, 10)


// líneas hacia abajo
    stroke(0, 96, 255, random(0, 50))
    strokeWeight(w2)
    line(x, 0, x, y)

//lineas que forman diagonal
    stroke(255, 99, 71, c)
    strokeWeight(w)
   // line(x, y, x, y)
    line(x, y, y, y)

}


function mousePressed() {
    saveCanvas()
}


