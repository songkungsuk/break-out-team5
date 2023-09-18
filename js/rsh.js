// const canvas = document.querySelector('#block');
// const ctx = canvas.getContext('2d');

const paddleHeight = 15;
const paddleWidth = 150;
let paddleXPosition = (canvas.width - paddleWidth) / 2;     // 공 받이의 x축 위치(가로 위치)

// 공 받이 그리는 함수
function drawPaddle() {
    
    ctx.beginPath();
    ctx.rect(paddleXPosition, canvas.height - 100, paddleWidth, paddleHeight);      // 여기서 100은 그냥 패달 조금 위에 있게 하려고 넣은거임
    ctx.fillStyle = "#00FF00";
    ctx.fill();
    ctx.closePath();    
}

// 마우스 움직일 때마다 공 받이 위치 바뀜
canvas.addEventListener('mousemove', function (e) {
    if(e.movementX !== 0) {     // x축으로 움직임이 있으면
        if(e.movementX > 0 && paddleXPosition < (canvas.width - paddleWidth)) {     // 오른쪽으로 움직이고, 공 받이의 위치가 오른쪽 벽 보다 작을때(벽에 부딪히면 더 안가게 하려고)
            paddleXPosition = e.offsetX - paddleWidth/2;    // 공 받이의 중간 부분이 마우스 커서로 오게 함
            // console.log(paddleXPosition);
            // console.log(e.offsetX);     // 캔버스 안에서 기준으로 마우스의 x축 위치
            drawPaddle();
        } else if(e.movementX < 0 && paddleXPosition > 0) {     // 왼쪽으로 움직이고, 공 받이의 위치가 왼쪽 벽보다 클때(벽에 부딪히면 더 안가게 하려고)
            paddleXPosition = e.offsetX - paddleWidth/2;
            // console.log(paddleXPosition);
            // console.log(e.offsetX);
            drawPaddle();
        }
    }
});
