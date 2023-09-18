// const canvas = document.querySelector('#block');
// const context = canvas.getContext('2d'); //캔버스의 2d렌더링 컨텍스트

const rows = 12; //행 개수
const cols = 10; //열 개수

const block_width = 85;
const block_height = 20;

const Board = [];

for (let i = 0; i < rows; i++) {
  Board[i] = [];
  for (let j = 0; j < cols; j++) {
    Board[i][j] = 1;
  } //보드의 각 행을 초기화하는 반복문
}
/*
정해준이 수정함
원래 drawBoard함수에 x좌표 ,y좌표를 계산해서 블록 없어지게 만들었습니다 
*/
function drawBoard() {
  for (let i = 0; i < Board.length; i++) {
    for (let j = 0; j < Board[i].length; j++) {
      if (Board[i][j] === 1) {
        const brickX = j * (block_width + 5) + 45; // x좌표값 계산
        const brickY = i * (block_height + 5) + 10; // y 좌표값 계산

        // 충돌 감지 및 블록 그리기
        if (
          x + ballSize > brickX &&
          x < brickX + block_width &&
          y + ballSize > brickY &&
          y < brickY + block_height
        ) {
          // 충돌 발생 시 블록을 없애고 값 0으로 변경 블록 사라짐
          Board[i][j] = 0;

          // 충돌 지점 계산
          const collisionX = x + ballSize / 2;
          const collisionY = y + ballSize / 2;

          // 블록의 중심 좌표 계산
          const blockCenterX = brickX + block_width / 2;
          const blockCenterY = brickY + block_height / 2;

          // 충돌 지점과 블록의 중심을 비교하여 이동 방향 변경
          if (collisionX < blockCenterX) {
            dx = -dx; // 왼쪽에서 충돌한 경우 x 방향 변경
          } else {
            dy = -dy; // 위 또는 아래에서 충돌한 경우 y 방향 변경
          }
        }
        // 블록을 그립니다.
        ctx.fillStyle = "skyblue";
        ctx.fillRect(brickX, brickY, block_width, block_height);
      }
    }
  }
}

function drawBrick(x, y) {
  ctx.fillStyle = "skyblue";
  ctx.fillRect(45 + x * 100, 10 + y * 30, block_width, block_height); // x, y 좌표를 추가하여 벽돌을 생성(그림)
} //fillRect를 사용하여 사각형으로 구성

drawBoard();

// 현재 test에 있는 js들이clearRect를 사용하기에 같이 돌리면 벽돌생성이 안되는 현상이 있음.
// isk.js의 벽돌그리는 로직을

// function draw...() {
// ....clearRect(0, 0, canvas.width, canvas.height);
// drawBall();
// drawBoard();
//이런식으로 다른 js에 옮기면 인터벌로 draw어쩌고가 정상 호출 할 수 있을 거라 생각됨...

//?

///////////////////////////////////////////////////

// function drawBoard() {
//     for (let i = 0; i < Board.length; i++) {
//         for (let j = 0; j < Board[i].length; j++) {
//             if (Board[i][j] === 3) {
//                 let brickX = j * 100;    새롭게 받아야하기에 let
//                 let brickY = i * 30;

// 충돌 감지
//                 if(ball.x < brickX + block_width && ball.x
//                      + ball.radius > brickX && ball.y < brickY
//                        + block_height && ball.y + ball.radius > brickY) {
//
// 충돌 발생
//                              Board[i][j] -= 1;  // 벽돌 상태 변경
//                               dy = -dy;  // 공의 방향 변경
//                 }

//                 drawBrick(j, i);
//             }
//         }
//     }
