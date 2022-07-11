let diametro = 20
let diametro2 = 10
function setup() {
    createCanvas(400, 400)
    angleMode(DEGREES)

}

function draw() {
    t = round(millis() / 1000) % 32
    background(0)
    //para que cuando estw en la segunda parte de la canción, cambie el color de fondo//
    if (t >= 4 && t < 7) {
        background(255)
    }

    //primera parte: circulos con fondo negro//
    if (t >= 0 && t < 4) {
        for (let x = 10; x < 400; x = x + 60) {
            for (let i = 0; i < 20; i++) {
                noFill()
                stroke(255)
                strokeWeight(0.5)
                diametro = diametro + 0.005
                ellipse(0, 0, x + diametro)
                ellipse(400, 0, x + diametro)
                ellipse(0, 400, x + diametro)
                ellipse(400, 400, x + diametro)
                strokeWeight(4)
                fill(x + 100, 255 - x / 2, 255, 20)
                stroke(x + 100, 255 - x / 2, 255)
                ellipse(200, 200, x - diametro)

                if (diametro > 415) {
                    diametro = 30
                }
            }
        }
    //segunda parte: circulos con fondo blanco//
    } else if (t >= 4 && t < 7) {
        for (let x = 10; x < 400; x = x + 60) {

            for (let i = 0; i < 20; i++) {

                noFill()
                stroke(0)
                strokeWeight(.5)
                diametro = diametro + 0.05
                ellipse(0, 0, x + diametro)
                ellipse(400, 0, x + diametro)
                ellipse(0, 400, x + diametro)
                ellipse(400, 400, x + diametro)
                strokeWeight(4)
                fill(x + 100, 255 - x / 2, 255, 40)
                stroke(x + 100, 255 - x / 2, 255)
                ellipse(200, 200, x - diametro)

                if (diametro > 500) {
                    diametro = 30
                }
            }
        }
    //tercera parte: grilla de circulos y movimiento de circulos//
    } else if (t >= 7 && t <= 20) {
        for (let x = 10; x < 400; x = x + 40) {
            for (let y = 10; y < 400; y = y + 40) {
                diametro2 = diametro2 + 0.001
                frameRate(10)
                noFill()
                stroke(255)
                strokeWeight(.5)
                ellipse(x, y, diametro2)
                fill(x + 100, 255 - x / 2, 255, 40)
                ellipse(random(width), x, diametro2)

                if (diametro2 > 30) {
                    diametro2 = 10
                }
            }
        }
    //cuarta parte: trama de circulos//
    } else if (t > 20 && t < 32) {
        for (let x = 10; x < 600; x = x + 60) {
            for (let y = 10; y < 600; y = y + 60) {
                stroke(255 - x / 3, 10 + x, 255)
                diametro2 = diametro2 + 0.01
                fill(255 - x / 3, 10 + x, 255, 20)
                ellipse(y, x, x + diametro2)
                noFill()
                strokeWeight(1)
                ellipse(x, x, y / diametro2)
                if (diametro2 > 200) {
                    diametro2 = 10
                }
            }
        }
    }
} 

//captura de pantalla//
function mousePressed(){
    saveCanvas()
}
