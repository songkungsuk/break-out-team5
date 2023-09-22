// Canvas 요소 
const canvas = document.querySelector("#gameCanvas"); //getElementById -> querySelector로 변경
const ctx = canvas.getContext("2d");// var -> const로 변경
let x = canvas.width / 2;
let y = canvas.height - 130;// 공 시작 위치인 것 같은데 패달보다 위에서 시작하게 하려고 수치 조금 바꿈

const strong_block = new Image();
strong_block.src = "../img/strong_block.png";
const nomal_block = new Image();
nomal_block.src = "../img/nomal_block2.png";
const nobroken_block = new Image();
nobroken_block.src = "../img/nobroken_block.png";
const itemImage = new Image(); // 새 이미지 객체 생성
itemImage.src = "img/item_block.png"; // 아이템 이미지 파일 경로 설정
const paddleImage = new Image();
paddleImage.src = "../img/paddle.png";
const ballImage = new Image();
ballImage.src = "../img/ball2.png";
//----------------------------------------------------------------

// Score 변수
let score = 0;//var ->let로 변경
const scoreElement = document.querySelector("#score");

// lives 변수
let lives = 0; //var ->let로 변경

const livesElement = document.querySelector("#lives");

// 기존 js에서 헤더를 초기값으로 변경할 수 있도록 함 
scoreElement.textContent = score;
livesElement.textContent = lives;


    //  1단계
    // for (let i = 0; i < numrows; i++) {
    //     for (let j = 0; j < numcols; j++) {
    //         if (j !== 0 && j !== 11) {
    //             blocks[i][j] == 1;
    //         }
    //     }
    // }
    // 2단계
    // for (let i = 0; i < numrows; i++) {
    //     for (let j = i + 5; j < numcols; j++) {
    //        blocks[i][j] == 1;
    //     }
    // }
    // for (let i = numrows-1; i > 0; i--) {
    //     for (let j = 0; j <numrows-i; j++) {
    //         blocks[i][j] == 1;
    //     }
    // }

    // // 3단계
    // for (let i = 0; i < numrows; i++) {
    //     for (let j = 0; j < numcols; j++) {
    //         if (i % 2 === 0 && j % 2 === 1) {
    //             blocks[i][j] == 1;
    //         }
    //         else if( i % 2 === 1 && j%2 === 0){
    //             blocks[i][j] == 1;
    //         }
    //     }
    // }