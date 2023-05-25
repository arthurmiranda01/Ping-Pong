const canvasEl = document.getElementById("canvas");
const canvasCtx = canvasEl.getContext("2d");
const lineWidth = 15;

function setup() {
    canvasEl.width = canvasCtx.width = window.innerWidth;
    canvasEl.height = canvasCtx.height = window.innerHeight;
}

function draw() {
    //Campo
    canvasCtx.fillStyle = "#286047";
    canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    //Linha central
    canvasCtx.fillStyle = "#ffffff";
    const y = 0;
    const x = window.innerWidth / 2 - lineWidth / 2;
    const w = lineWidth;
    const h = window.innerHeight;
    canvasCtx.fillRect(x, y, w, h);

    //Raquetes
    canvasCtx.fillRect(10, 100, lineWidth, 200);
    canvasCtx.fillRect(
        window.innerWidth - lineWidth - 10,
        200,
        lineWidth,
        200)

    //Bola
    canvasCtx.beginPath();
    canvasCtx.arc(200, 300, 20, 0, 2 * Math.PI, false);
    canvasCtx.fill();
}

setup();
draw();