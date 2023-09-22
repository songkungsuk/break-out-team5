const rows = 6; //행 개수
const cols = 12; //열 개수

const block_width = 87;
const block_height = 20;
let scoreTitle = document.querySelector("#score");
const Board = [];
let stage = 1;
// for (let i = 0; i < rows; i++) {
//   Board[i] = [];
//   for (let j = 0; j < cols; j++) {
//     //임시로 이렇게 초기화 했음 -경석-
//     if (j !=  0 && j != cols-1) {
//       Board[i][j] = 1;
//     }
//   } //보드의 각 행을 초기화하는 반복문
// }
drawStage1();

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
          // Board[i][j] -= 1;

          // 블럭 한개 부딪히면 다 없어지게 하는 코드인데 그냥 다음 스테이지로 넘어가는거 실험하려고 넣은거임
          for (let i = 0; i < Board.length; i++) {
            for (let j = 0; j < Board[i].length; j++) {
              Board[i][j] = 0;
            }
          }

          if (Board.every(function (board) {
            if (board.every(function (value) {
              return value == 0 || value == 9 || value == 10;
            })) {
              return true;
            }
          })) {
            ++stage;
            console.log('stage = ' + stage);
            isStarted = false;
            dy = 0;
            y = canvas.height - 130;  // 이거 없으면 공 세로 위치가 바닥에 꽂혀있는 상태로 움직임
            x = paddleXPosition + paddleWidth / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawPaddle(); // 공받아치는 판
            drawBall(); //공 그리기
            drawBoard();
            if (stage == 2) {
              drawStage2();
            } else if (stage == 3) {
              drawStage3();
            } else {
              alert('게임 클리어');
              document.location.reload();
            }
          }

          if (Board[i][j] === 0) {
            // 정해준이 수정함, 블록 하나당 10점 오르게 점수 표시해놨습니다
            scoreTitle.textContent = parseInt(scoreTitle.textContent) + 10; // 수정하셔도 됩니다
          }
          // 45~69 정해준이 수정함. -> 송경석이 코드 다잡아먹어버림;;
          // 충돌 지점 계산
          const collisionX = x + ballSize / 2;
          const collisionY = y + ballSize;
          console.log("충돌지점 x" + collisionX);
          console.log("충돌지점 y" + collisionY);
          console.log("블럭 좌표 x" + brickX);
          console.log("x좌표" + x);
          console.log("블럭 좌표 y" + brickY);
          console.log("y좌표" + y);

          // 블록의 오른쪽끝 아래쪽끝 좌표 계산
          const blockX = brickX + block_width; // 56 ~ 72수정했습니다 -경석
          const blockY = brickY + block_height;

          // x,y 좌표를 기준으로 블럭이 처음들어갔을때
          if (x >= brickX && brickY <= y) {
            dy = -dy;
          } else if (collisionX >= blockX && brickY >= y) {
            dy = -dy;
          }

          if (collisionY >= brickY && collisionY <= blockY && brickX >= x) {
            dx = -dx;
          } else if (
            collisionY >= brickY &&
            collisionY <= blockY &&
            brickX - block_width <= x
          ) {
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
          Board[i][j] = 0; // 

          const imageUrls = [
            "img/item1.png",
            "img/item2.png",
            "img/item3.png",
            "img/item4.png"
          ];
          const randomImageUrl =
            imageUrls[Math.floor(Math.random() * imageUrls.length)];

          const chooseImage = new Image(); // 이미지 객채 생성
          chooseImage.onload = function () {  // 이미지 그림
            animateItem(chooseImage, brickX, brickY);
          };
          chooseImage.src = randomImageUrl;

          function animateItem(chooseImage, x, y) {
            const paddleY = canvas.height - paddleHeight;
            if (y <= canvas.height) { // 캔버스 높이에서 떨어지면
              ctx.clearRect(0, 0, chooseImage.width, chooseImage.height);
              y += 5; //이미지 내려가는 속도 조절할 수 있음
              if (y + dy > canvas.height && y + chooseImage.width <= canvas.height && x + chooseImage.width <= canvas.height) {  // 이거만 수정하면됨
                ctx.clearRect(x, y, chooseImage.width, chooseImage.height);
              }
              ctx.drawImage(chooseImage, x + (block_width / 2), y);//이미지 그리는 
              if (
                x + chooseImage.width >= paddleXPosition &&  // 이미지랑 패들이랑 충돌했을때 점수 올라감 나머지는 안됨
                x <= paddleXPosition + paddleWidth &&
                y + chooseImage.width >= paddleXPosition
              ) {
                ctx.clearRect(x, y, chooseImage.width, chooseImage.height);
                scoreTitle.textContent = parseInt(scoreTitle.textContent) + 50;  //여기 나중에 아이템 로직 넣으면 될 듯.
                if (randomImageUrl == 'img/item3.png') {
                  paddleWidth = 200;
                  // let longPaddleTime = 5;
                  // const longPaddleItemInterval = setInterval(function() {
                  //   --longPaddleTime;
                  // }, 1000);
                  // if(longPaddleTime === 0) {
                  //   clearInterval(longPaddleItemInterval);
                  //   paddleWidth = 150;
                  // }
                  // ctx.drawImage(longPaddleImage, paddleXPosition, canvas.height - 100, paddleWidth, paddleHeight);
                  longPaddleItemTimeOut = setTimeout(function () {
                    paddleWidth = 150;
                  }, 5000);
                }
                if (randomImageUrl == 'img/item3.png') {
                  clearTimeout(longPaddleItemTimeOut);
                }
              } else {
                requestAnimationFrame(() => animateItem(chooseImage, x, y));
              }
              // 프레임 활용해서 다시 그림

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
