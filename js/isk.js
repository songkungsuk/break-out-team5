// const canvas = document.querySelector('#block');
// const context = canvas.getContext('2d'); //캔버스의 2d렌더링 컨텍스트

const rows = 6; //행 개수
const cols = 12; //열 개수

const block_width = 87;
const block_height = 20;
let scoreTitle = document.querySelector("#score");
const Board = [];

for (let i = 0; i < rows; i++) {
  Board[i] = [];
  for (let j = 0; j < cols; j++) {
    //임시로 이렇게 초기화 했음 -경석-
    if (j % 3 == 0) {
      Board[i][j] = 1;
    } else {
      Board[i][j] = 2;
    }
  } //보드의 각 행을 초기화하는 반복문
}

/*
정해준이 수정함
원래 drawBoard함수에 x좌표 ,y좌표를 계산해서 블록 없어지게 만들었습니다 
*/
function drawBoard() {
  for (let i = 0; i < Board.length; i++) {
    for (let j = 0; j < Board[i].length; j++) {
      if (Board[i][j] >= 1) {
        // 1 이상으로 설정하면 다양한 블록들을 처리할수있겠지.
        const brickX = j * (block_width + 1) + 15; // x좌표값 계산
        const brickY = i * (block_height + 1) + 10; // y 좌표값 계산


        // 충돌 감지 및 블록 그리기
        // 공이 그려지는좌표가 블럭안으로 들어간경우
        if (
          x + ballSize >= brickX &&
          x <= brickX + block_width &&
          y + ballSize >= brickY &&
          y <= brickY + block_height
        ) {
          // 충돌 발생 시 블록을 없애고 값 0으로 변경 블록 사라짐
          Board[i][j] -= 1;

          if (Board[i][j] === 0) {                                                       // 정해준이 수정함, 블록 하나당 10점 오르게 점수 표시해놨습니다
            scoreTitle.textContent = parseInt(scoreTitle.textContent) + 10;            // 수정하셔도 됩니다  
          }
          // 45~69 정해준이 수정함. -> 송경석이 코드 다잡아먹어버림;;
          // 충돌 지점 계산
          const collisionX = x + ballSize / 2;
          const collisionY = y + ballSize;
          console.log('충돌지점 x' + collisionX);
          console.log('충돌지점 y' + collisionY);
          console.log('블럭 좌표 x' + brickX);
          console.log('x좌표' + x);
          console.log('블럭 좌표 y' + brickY);
          console.log('y좌표' + y);

          // 블록의 오른쪽끝 아래쪽끝 좌표 계산 
          const blockX = brickX + block_width; // 56 ~ 72수정했습니다 -경석
          const blockY = brickY + block_height;

          // // 왼쪽 오른쪽에서 충돌한 경우
          // if (collisionY < blockY) {
          //   dx = -dx; // 오른쪽에서 충돌한 경우 x 방향 변경
          // } 
          // if (collisionY < brickY) {
          //   // 아래에서 충돌한 경우
          //   dx = -dx; // 왼쪽에서 충돌한 경우 x 방향 변경
          // }

          // // 위 아래 에서 충돌한 경우
          // if (collisionX < brickX) {
          //   dy = -dy; // 위에서 충돌한 경우 y 방향 변경 
          // } else if (collisionX < blockX) {
          //   dy = -dy; // 아래에서 충돌한 경우 y 방향 변경
          // }
          // x,y 좌표를 기준으로 블럭이 처음들어갔을때
          if (x >= brickX && brickY <= y) {
            dy = -dy;
          }
          else if (collisionX >= blockX && brickY >= y) {
            dy = -dy;
          }

          if (collisionY >= brickY && collisionY <= blockY && brickX >= x) {
            dx = -dx;
          }
          else if (collisionY >= brickY && collisionY <= blockY && brickX - block_width <= x) {
            dx = -dx;
          }
        }
        //-------------------------- 송경석--------------
        if (Board[i][j] === 0) {
          //블럭 안그림
        }
        if (Board[i][j] === 1) {
          // 블록을 그립니다.
          // 일반 블럭 그림
          ctx.drawImage(nomal_block, brickX, brickY);
        }
        if (Board[i][j] === 2) {
          //강화 블럭 그림
          ctx.drawImage(strong_block, brickX, brickY);
        }
        if (Board[i][j] === 4) {
          Board[i][j] = 0; // 블럭을 그리지 않음

          //const itemImage = new Image(); // 새 이미지 객체 생성
          //itemImage.src = "img/item_block.png"; // 아이템 이미지 파일 경로 설정

          // 이미지 3개 배열에 저장
          const imageUrls = [
            'img/item_block.png',
            'img/strong_block.png',
            'img/nobroken_block.png'
          ];
          const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)]; // imageUrls길이 만큼 출력

          // 이미지 객체를 생성합니다.
          const chooseImage = new Image();

          // 이미지가 로드되었을 때 실행되는 콜백 함수를 설정합니다.
          chooseImage.onload = function () {
            // 이미지가 성공적으로 로드되면 그리기 작업을 수행합니다.
            animateItem(chooseImage, itemX, itemY);
          };
          chooseImage.src = randomImageUrl;


          let itemX = brickX; // 이미지를 그릴 x 좌표
          let itemY = brickY; // 이미지를 그릴 y 좌표

          function animateItem(chooseImage, x, y) {
            const paddleY = canvas.height - paddleHeight; // 패들의 y 좌표
            if (y => paddleY) {
              // 이미지를 아래로 이동시키기
              y += 5; // 이미지를 아래로 내리는 속도 및 값 조절 가능
              ctx.clearRect(x, y +2 , chooseImage.width, chooseImage.height + 2); // 기존 이미지를 지우기
              ctx.drawImage(chooseImage, x, y); // 이동된 위치에 이미지 다시 그리기
              if (y > paddleXPosition - chooseImage.width && y > paddleY - chooseImage.width) {
                scoreTitle.textContent = parseInt(scoreTitle.textContent) + 50;
              } else {
                // 다음 프레임에서 반복 실행
                requestAnimationFrame(() => animateItem(chooseImage, x, y));
              }
            }
          }
        }

        if (Board[i][j] === 5) {
          ctx.drawImage(itemImage, brickX, brickY);
        }
        if (Board[i][j] === 9) {
          Board[i][j] += 1; // 블럭상태유지
          ctx.drawImage(nobroken_block, brickX, brickY);
        }
        if (Board[i][j] === 10) {
          ctx.drawImage(nobroken_block, brickX, brickY);
        }
        //-------------------------------------------------
      }
    }
  }
}
// ?
function drawBrick(x, y) {
  ctx.fillStyle = "skyblue";
  ctx.fillRect(45 + x * 100, 10 + y * 30, block_width, block_height); // x, y 좌표를 추가하여 벽돌을 생성(그림)
} //fillRect를 사용하여 사각형으로 구성

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