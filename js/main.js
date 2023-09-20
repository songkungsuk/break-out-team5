//여기다 여러분들이 만든거 합칠생각중
Board[4][5] = 10;
Board[4][10] = 10;
Board[2][2] = 10;
Board[5][10] = 5;

//여기다 여러분들이 만든거 합칠생각중
let interval;

drawPaddle(); // 공받아치는 판
drawMoveBall(); //공 그리기
drawBoard(); //벽돌그리기

canvas.addEventListener('click', function(e) {
    // 클릭해서 시작하면 시작 메시지 지우려고 만든거임. 임시로 만든거라 이상하면 업새도됨
    document.querySelector('#startMsg').innerHTML = '';

    interval = setInterval(function () {
        //지우고 그리고 반복하겠지.. 충돌함수도 고려..
        ctx.clearRect(0, 0, canvas.width, canvas.height); //그린거 다시 그리기위해 전체 백지화
        //drawPaddle하고 drawMoveBall 순서바꾸면안되네요
        drawPaddle(); // 공받아치는 판
        drawMoveBall(); //공 그리기
        drawBoard(); //벽돌그리기
    }, 1);

    // 클릭이 된 다음에 시작해야되서 rsh.js 파일에 있던거를 여기에 옮김. 
    // 여기에 안 옮기면 시작 하기도 전에 마우스 움직이면 마우스가 움직임
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
})