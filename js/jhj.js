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
  if (y + dy < ballSize) {
    // 상,하단 둘 중에 하나라도 벽에 부딪히면 공이 dy에서 -dy로 뀌면서 공이 반대로 튀게됨
    dy = -dy;
  } else if (y + dy > canvas.height - 100 - ballSize) {
    // 26번줄 ~ 36번줄 - 류승호가 추가하였습니다. 패달에 맞으면 튀김
    if(x > paddleXPosition && x < paddleXPosition + paddleWidth) {  // 공의 위치가 패달의 y축(높이)에 닿고 패달의 x축(가로) 범위 안에 있으면 튀김 (그냥 쉽게말해서 패달에 맞으면 튀긴다는거임)
        dy = -dy;
    } 
  } if (y + dy > canvas.height - ballSize) {  // 여기는 else if로하면 적용이 안됨..아마 위에 else if에 걸려서 그런것 같은데?
    // 바닥에 닿으면 게임 종료 후 새로고침
    alert("게임 종료ㅋㅋ")
    clearInterval(interval);  // 이거 없으면 공 위치가 초기화가 안되서 31번줄 if문에 계속 걸려서 경고창 뜨는것 같아서 넣었음.
    document.location.reload();
  }
  x += dx;
  y += dy;
}

//신기하네요..
