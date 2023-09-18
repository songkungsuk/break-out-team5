let dx = 8; // x축 방향으로 움직이는 속도 초기화한 값
let dy = -8; // y축 방향으로 움직이는 속도 초기화한 값.
const ballSize = 10; // 공 사이즈 크기 10으로 지정.

function drawBall() {
  // 공 그리는 로직
  ctx.beginPath(); // 선 그림
  ctx.arc(x, y, ballSize, 0, Math.PI * 2); // 곡선을 그려 공을 만들어냄.
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function drawMoveBall() {
  // x,y좌표를 통해 공그림

  drawBall();

  if (x + dx > canvas.width - ballSize || x + dx < ballSize) {
    // 좌,우 둘 중에 하나라도 벽에 부딪히면 공이 dx에서 -dx음수 값으로 변하면서 공이 반대방향으로 튐.
    dx = -dx;
  }
  if (y + dy > canvas.height - ballSize || y + dy < ballSize) {
    // 상,하단 둘 중에 하나라도 벽에 부딪히면 공이 dy에서 -dy로 뀌면서 공이 반대로 튀게됨
    dy = -dy;
  }
  x += dx;
  y += dy;
}

//신기하네요..
