//여기다 여러분들이 만든거 합칠생각중
Board[4][5] = 10;
Board[4][10] = 10;
Board[2][2] = 10;
Board[5][10] = 5;
const interval = setInterval(function () {
    //지우고 그리고 반복하겠지.. 충돌함수도 고려..
    ctx.clearRect(0, 0, canvas.width, canvas.height); //그린거 다시 그리기위해 전체 백지화
    //drawPaddle하고 drawMoveBall 순서바꾸면안되네요
    drawPaddle(); // 공받아치는 판
    drawMoveBall(); //공 그리기
    drawBoard(); //벽돌그리기
    




}, 1);