const canvasEl = document.getElementById("canvas");
const canvasCtx = canvasEl.getContext("2d");
const lineWidth = 15;
gapX = 10;

const field = {
    w: window.innerWidth,
    h: window.innerHeight, 
    draw: function(){
        canvasCtx.fillStyle = "#286047";
        canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
}

const line = {
    w: 15,
    h: field.h, 
    draw: function() {
        canvasCtx.fillStyle = "#ffffff";
        canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h);
    }
}

const leftPaddle = {
    x: gapX,
    y: 10,
    w: line.w, 
    h: 200,
    draw: function() {
        canvasCtx.fillStyle = "#ffffff";
        canvasCtx.fillRect(this.x, this.w, this.y, this.h);
    }
}

const rightPaddle = {
    x: field.w - line.w - gapX,
    y: 10,
    w: line.w, 
    h: 200,
    draw: function() {
        canvasCtx.fillStyle = "#ffffff";
        canvasCtx.fillRect(this.x, this.w, this.y, this.h);
    }
}

function setup() {
    canvasEl.width = canvasCtx.width = window.innerWidth;
    canvasEl.height = canvasCtx.height = window.innerHeight;
}

function draw() {
    //Campo
    field.draw();

    //Linha central
    line.draw();

    //Raquetes
    leftPaddle.draw();
    rightPaddle.draw();

    //Bola
    canvasCtx.beginPath();
    canvasCtx.arc(200, 300, 20, 0, 2 * Math.PI, false);
    canvasCtx.fill();

    //Placar
    canvasCtx.font = "bold 72px Arial";
    canvasCtx.textAlign = "center";
    canvasCtx.textBaseline = "top";
    canvasCtx.fillStyle = "#01341D"
    canvasCtx.fillText("3", window.innerWidth / 4, 50);
    canvasCtx.fillText("1", window.innerWidth / 4 + window.innerWidth / 2, 50);

}




setup();
draw();