const mainCanvas = document.querySelector('#main');
const mainContext = mainCanvas.getContext("2d");
mainCanvas.width = 720;
const blockWidth = 60;
const blockHeight = 20;
const blockSpace = 5;
const widthBlockCount = 11;
const heightBlockCount = 5;

mainContext.fillStyle = "#98DFFF"

for (let i = 0; i < widthBlockCount; i++) {
    for (let j = 0; j < heightBlockCount; j++) {
        mainContext.fillRect(
            5+blockSpace * i + blockWidth * i,
            5+blockSpace * j + blockHeight * j,
            blockWidth,
            blockHeight
        );
    }
}
