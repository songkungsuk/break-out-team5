//여기 변수이름수정하면 다른것들 다안됨 수정 X
// Canvas 요소 
const canvas = document.getElementById("gameCanvas");  //getElementById -> querySelector
const ctx = canvas.getContext("2d"); // var -> let, const
let x = canvas.width / 2;
let y = canvas.height - 30;

// Score 변수
var score = 0; 

// lives변수
var lives = 0;

// 게임 그리기 
function draw() { //div요소로 변경 프론트에 너무없음  canvas로 글씨 쓰면 나중에 확대하면 깨짐.
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // Header 그리기 (nav 형식)
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, canvas.width, 40);

    ctx.fillStyle = "white";
    ctx.font = "bold 20px Arial";
    ctx.fillText("Score: " + score, 10, 25);
    ctx.fillText("Lives: " + lives, canvas.width - 100, 25);
}

draw();