let sorteo
let x = 0
let y = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(255)
    lado = 50
}


function draw() {

    sorteo = random(100)

//al haber 5 modulos, se dividió la probabilidad en 5

//modulo 1: elipse roja
    if (sorteo > 80) {
        noStroke()
        fill(255, 0, 0)
        ellipse(x + lado / 2, y + lado / 2, lado)
//modulo 2: lineas diagonales
    } else if (sorteo > 60) {
        stroke(0)
        strokeWeight(5)
        line(x, y, x + lado, y + lado)
        line(x + (1 / 3) * lado, y, x + lado, y + (2 / 3) * lado)
        line(x + (2 / 3) * lado, y, x + lado, y + (1 / 3) * lado)
        line(x, y + (1 / 3) * lado, x + (2 / 3) * lado, y + lado)
        line(x, y + (2 / 3) * lado, x + (1 / 3) * lado, y + lado)
//modulo 3: circulos pequeños alternando colores
    } else if (sorteo > 40) {
        noStroke()
        fill(0)
        ellipse(x + lado / 4, y + lado / 4, lado / 2)
        ellipse(x + (3 / 4) * lado, y + (3 / 4) * lado, lado / 2)
        noStroke()
        fill(255, 0, 0)
        ellipse(x + lado / 4, y + (3 / 4) * lado, lado / 2)
        ellipse(x + (3 / 4) * lado, y + lado / 4, lado / 2)
//modulo 4: elipse negra
    } else if (sorteo > 20) {
        noStroke()
        fill(0)
        ellipse(x + lado / 2, y + lado / 2, lado)
//modulo 5: lineas diagonales inversas
    } else {
        stroke(0)
        strokeWeight(5)
        line(x, y + lado / 3, x + lado / 3, y)
        line(x, y + (2 / 3) * lado, x + (2 / 3) * lado, y)
        line(x, y + lado, x + lado, y)
        line(x + lado / 3, y+lado, x + lado, y + lado / 3)
        line(x + (2 / 3) * lado, y+lado, x + lado, y + (2 / 3) * lado)

    }
    // incremento x
    x = x + lado

    // si llego al límite derecho
    // bajo de línea de la trama (incremento y)
    // también reinicio x
    if (x >= width) {
        y = y + lado
        x = 0
    }

}

function mousePressed() {
    saveCanvas()
}
