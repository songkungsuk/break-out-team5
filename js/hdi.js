// Canvas 요소 
const canvas = document.querySelector("#gameCanvas"); //getElementById -> querySelector로 변경
const ctx = canvas.getContext("2d");// var -> const로 변경
let x = canvas.width / 2;
let y = canvas.height - 150;// 공 시작 위치인 것 같은데 패달보다 위에서 시작하게 하려고 수치 조금 바꿈
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