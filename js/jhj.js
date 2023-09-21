let dx = 0; // x축 방향으로 움직이는 속도 초기화한 값
let dy = -4; // y축 방향으로 움직이는 속도 초기화한 값.
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
  }
  // else if 인거 if로 수정 그리고 100 -> 90으로 수정 패들을 얇게해서 얇아진만큼 타점을 조정했음 -송경석-
  if ((y + dy > canvas.height - 100 - ballSize) && (y + dy < canvas.height - 90 - ballSize)) {
    // 26번줄 ~ 36번줄 - 류승호가 추가하였습니다. 패달에 맞으면 튀김
    if(x >= paddleXPosition && x <= paddleXPosition + paddleWidth) {  // 공의 위치가 패달의 y축(높이)에 닿고 패달의 x축(가로) 범위 안에 있으면 튀김 (그냥 쉽게말해서 패달에 맞으면 튀긴다는거임)
      console.log('공 위치 = ' + x + ', ' + '패들위치 = ' + paddleXPosition);
      if(x < paddleXPosition + (paddleWidth/8)) { // paddleWidth - paddleWidth/8 = 18.??
        dx = -3;
        console.log('맞은 부분 = 1/8, x축 속도 = ' + dx + '로 변경');
      } 
      if(x === (paddleXPosition + paddleWidth)/2) {
        dx = 0;
        console.log('맞은 부분 = 정중앙, x축 속도 = ' + dx + '로 변경');
      }
      else if(x < paddleXPosition + (paddleWidth/8) * 2) {
        dx = -2.5;
        console.log('맞은 부분 = 2/8, x축 속도 = ' + dx + '로 변경');
      } else if(x < paddleXPosition + (paddleWidth/8) * 3) {
        dx = -2;
        console.log('맞은 부분 = 3/8, x축 속도 = ' + dx + '로 변경');
      } else if(x < paddleXPosition + (paddleWidth/8) * 4) {
        dx = -1;
        console.log('맞은 부분 = 4/8, x축 속도 = ' + dx + '로 변경');
      } else if(x < paddleXPosition + (paddleWidth/8) * 5) {
        dx = 1;
        console.log('맞은 부분 = 5/8, x축 속도 = ' + dx + '로 변경');
      } else if(x < paddleXPosition + (paddleWidth/8)* 6) {
        dx = 2;
        console.log('맞은 부분 = 6/8, x축 속도 = ' + dx + '로 변경');
      } else if(x < paddleXPosition + (paddleWidth/8) * 7) {
        dx = 2.5;
        console.log('맞은 부분 = 7/8, x축 속도 = ' + dx + '로 변경');
      } else if(x <= paddleXPosition + (paddleWidth/8) * 8) {
        dx = 3;
        console.log('맞은 부분 = 8/8, x축 속도 = ' + dx + '로 변경');
      } 
      dy = -dy;
    } 
  } 
  if (y + dy > canvas.height) {  
    // 이미지 블럭 그릴려면 window.addEventListener() 해야하는데 이걸해버리면 Interval 함수가 안으로들어가버려서 사용을못해서..일단 임시로 이렇게하세요..ㅠㅜㅠ
    
    // 바닥에 닿으면 게임 종료 후 새로고침
    alert("게임 종료ㅋㅋ") //ㅋㅋ
    clearInterval(interval);  // 이거 없으면 공 위치가 초기화가 안되서 31번줄 if문에 계속 걸려서 경고창 뜨는것 같아서 넣었음.
    document.location.reload();
    dy = -dy;
  }
  x += dx;
  y += dy;
}

//신기하네요..