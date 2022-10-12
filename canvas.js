// Canvas

function dibujarCanvas () {

    areaCanvas.lineWidth = 10;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#F3F5FC";
    areaCanvas.strokeStyle = "#0A3871";

    areaCanvas.fillRect (0,0,1200,860);
    areaCanvas.beginPath ();
    areaCanvas.stroke ();
    areaCanvas.closePath ();
}

function dibujarLineas () {
    
    areaCanvas.lineWidth = 6;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#0A3871";
    areaCanvas.strokeStyle = "#0A3871";
    areaCanvas.beginPath ();

    let anchura = 600/(palabraAdivinar.length);
    for (let i = 0; i < (palabraAdivinar.length); i++) {
        areaCanvas.moveTo(500 + (anchura*i), 640);
        areaCanvas.lineTo(550 + (anchura*i), 640);
    }
    areaCanvas.stroke ();
    areaCanvas.closePath ();
}

function escribirLetraCorrecta (index) {
    
    areaCanvas.font = "bold 50px Inter";
    areaCanvas.lineWidth = 6;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#0A3871";
    areaCanvas.strokeStyle = "#0A3871";
    areaCanvas.beginPath();

    let anchura = 600 / palabraAdivinar.length;
    areaCanvas.fillText (palabraAdivinar[index], 510+(anchura*index), 620);
    areaCanvas.stroke();
    areaCanvas.closePath();
}

function escribirLetraIncorrecta (letra, errorIzq) {
    areaCanvas.font = "bold 40px Inter"
    areaCanvas.lineWidth = 6;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#0A3871";
    areaCanvas.strokeStyle = "#0A3871";
    areaCanvas.fillText (letra, 515+(40*(10-errorIzq)), 710, 40);
}


// Munheco

function dibujarBase () {

    areaCanvas.lineWidth = 5;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#F3F5F6";
    areaCanvas.strokeStyle = "#0A3871";

    areaCanvas.beginPath ();
    areaCanvas.moveTo (650,500);
    areaCanvas.lineTo (900, 500);
    areaCanvas.stroke ();
    areaCanvas.closePath ();
}

function dibujarMastil () {

    areaCanvas.lineWidth = 5;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#F3F5F6";
    areaCanvas.strokeStyle = "#0A3871";

    areaCanvas.beginPath ();
    areaCanvas.moveTo (710,500);
    areaCanvas.lineTo (710, 160);
    areaCanvas.lineTo (835,160);
    areaCanvas.lineTo (835, 200);
    areaCanvas.stroke ();
    areaCanvas.closePath ();
}

function dibujarCabeza () {

    areaCanvas.lineWidth = 5;

    areaCanvas.strokeStyle = "#0A3871";

    areaCanvas.beginPath ();
    areaCanvas.arc (835,230,30,0,2*Math.PI);
    areaCanvas.stroke ();
    areaCanvas.closePath ();
}

function dibujarTorso () {

    areaCanvas.lineWidth = 5;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#F3F5F6";
    areaCanvas.strokeStyle = "#0A3871";

    areaCanvas.beginPath ();
    areaCanvas.moveTo (835,260);
    areaCanvas.lineTo (835,360);
    areaCanvas.stroke ();
    areaCanvas.closePath ();            
}

function dibujarBrazoDerecho () {
    
    areaCanvas.lineWidth = 5;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#F3F5F6";
    areaCanvas.strokeStyle = "#0A3871";

    areaCanvas.beginPath ();
    areaCanvas.moveTo (838,260);
    areaCanvas.lineTo (865,340);
    areaCanvas.stroke ();
    areaCanvas.closePath ();     
}

function dibujarBrazoIzquierdo () {
    areaCanvas.lineWidth = 5;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#F3F5F6";
    areaCanvas.strokeStyle = "#0A3871";

    areaCanvas.beginPath ();
    areaCanvas.moveTo (832,260);
    areaCanvas.lineTo (807,340);
    areaCanvas.stroke ();
    areaCanvas.closePath ();     
}

function dibujarPiernaDerecha () {
    
    areaCanvas.lineWidth = 5;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#F3F5F6";
    areaCanvas.strokeStyle = "#0A3871";

    areaCanvas.beginPath ();
    areaCanvas.moveTo (835,360);
    areaCanvas.lineTo (865,440);
    areaCanvas.stroke ();
}

function dibujarPiernaIzquierda () {
    
    areaCanvas.lineWidth = 5;
    areaCanvas.lineCap = "round";
    areaCanvas.lineJoin = "round";
    areaCanvas.fillStyle = "#F3F5F6";
    areaCanvas.strokeStyle = "#0A3871";

    areaCanvas.beginPath ();
    areaCanvas.moveTo (835,360);
    areaCanvas.lineTo (805,440);
    areaCanvas.stroke ();
}
