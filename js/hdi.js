// Canvas 요소 
const canvas = document.querySelector("#gameCanvas"); //getElementById -> querySelector로 변경
const ctx = canvas.getContext("2d");// var -> const로 변경
let x = canvas.width / 2;
let y = canvas.height - 130;// 공 시작 위치인 것 같은데 패달보다 위에서 시작하게 하려고 수치 조금 바꿈

let isStarted = false;
let interval;
let life = 3;
let life_html = '';
let isBallfloor = false;
let isGetItem2 = false;
let itemCount = 0; // 아이템 블록 개수

const strong_block = new Image();
strong_block.src = "../img/strong_block.png";
const nomal_block = new Image();
nomal_block.src = "../img/nomal_block.png";
const nobroken_block = new Image();
nobroken_block.src = "../img/nobroken_block.png";
const itemImage = new Image(); // 새 이미지 객체 생성
itemImage.src = "img/item_block.png"; // 아이템 이미지 파일 경로 설정
const paddleImage = new Image();
paddleImage.src = "../img/paddle.png";
const paddleImage2 = new Image();
paddleImage2.src = "../img/paddle2.png";
const ballImage = new Image();
ballImage.src = "../img/ball.png";
const PowerballImage = new Image();
PowerballImage.src = "../img/ball4.png";
const longPaddleImage = new Image();
longPaddleImage.src = "../img/long_paddle.png";


//----------------------------------------------------------------
//  1단계
function drawStage1() {
    for (let i = 0; i < rows; i++) {
        Board[i] = [];
        for (let j = 0; j < cols; j++) {
            if (j !== 0 && j !== cols - 1 && i > 1) {
                Board[i][j] = 1;
            }
        }
    }

    while (itemCount < 8) {
        const randomRow = Math.floor(Math.random() * (rows - 2)) + 2; // 2 이상의 행
        const randomCol = Math.floor(Math.random() * (cols - 2)) + 1; // 1 이상, cols - 2 이하의 열
        if (Board[randomRow][randomCol] !== 5) {
            Board[randomRow][randomCol] = 5; 
            itemCount++;
        }
    }

    // 안뽀개지는 블럭들 임의로 지정
    Board[6][5] = 10;
    Board[6][6] = 10;
    Board[6][4] = 10;
    Board[6][7] = 10;
    Board[5][5] = 10;
    Board[5][6] = 10;
    Board[5][4] = 10;
    Board[5][7] = 10;
}

// 2단계
function drawStage2() {
    for (let i = 0; i < rows; i++) {
        Board[i] = [];
    }
    for (let i = 2; i < rows; i++) {

        for (let j = i + 3; j < cols; j++) {
            Board[i][j] = 1;
        }
    }
    for (let i = rows; i > 1; i--) {
        for (let j = 0; j < rows - i; j++) {
            Board[i][j] = 1;
        }
    }
}

// 3단계
function drawStage3() {
    for (let i = 0; i < rows; i++) {
        Board[i] = [];
        for (let j = 0; j < cols; j++) {
            if (i % 2 === 0 && j % 2 === 1) {
                Board[i][j] = 1;
            }
            else if (i % 2 === 1 && j % 2 === 0) {
                Board[i][j] = 1;
            }
        }
    }
}