let isStarted = false;
window.addEventListener('load', function () {
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

    canvas.addEventListener('click', function (e) {
        // 클릭해서 시작하면 시작 메시지 지우려고 만든거임. 임시로 만든거라 이상하면 업새도됨
        document.querySelector('#startMsg').innerHTML = '';
        isStarted = true;

        interval = setInterval(function () {
            //지우고 그리고 반복하겠지.. 충돌함수도 고려..
            ctx.clearRect(0, 0, canvas.width, canvas.height); //그린거 다시 그리기위해 전체 백지화
            //drawPaddle하고 drawMoveBall 순서바꾸면안되네요
            drawPaddle(); // 공받아치는 판
            drawMoveBall(); //공 그리기
            drawBoard(); //벽돌그리기
        }, 1);
    })
});

