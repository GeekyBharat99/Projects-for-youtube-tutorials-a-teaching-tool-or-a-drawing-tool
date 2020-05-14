const ctx = document.getElementById("canvas").getContext("2d");

function changeBgColor() {
  var penColor = document.getElementById("penColor").value;
  var backgroundColor = document.getElementById("backGroundColor").value;
  var penWidth = document.getElementById("penWidth").value;
  document.body.style.backgroundColor = backgroundColor;
  ctx.strokeStyle = penColor;
  ctx.lineWidth = penWidth;
}
var backgroundColor = document.getElementById("backGroundColor").value;
document.body.style.backgroundColor = backgroundColor;
resize();
window.addEventListener("resize", resize);

let mousePos = {
  x: 0,
  y: 0,
};

document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", mousePosition);
document.addEventListener("mouseenter", mousePosition);

//functions

function mousePosition(e) {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
}

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  if (e.buttons !== 1) return;

  ctx.beginPath();
  ctx.lineCap = "round";

  ctx.moveTo(mousePos.x, mousePos.y);

  mousePosition(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
}

// bind event handler to clear button
document.getElementById("clear").addEventListener(
  "click",
  function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
  false
);
