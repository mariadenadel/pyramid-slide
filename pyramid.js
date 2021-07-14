let selectBrick = document.getElementById('brick');
let selectNumber = document.getElementById('number');
let pyramid = document.getElementById('pyramid');

function drawPyramid() {
    let height = selectNumber.value;
    let brick = selectBrick.value;
    pyramid.innerHTML = ''
    for (let i = 0; i < height; i++) {
        let row = document.createElement('p');
        row.innerHTML = '&nbsp;'.repeat(height - i - 1) + brick.repeat(i + 2);
        pyramid.appendChild(row);
    };
}

selectBrick.addEventListener('input', drawPyramid);
selectNumber.addEventListener('input', drawPyramid);
window.addEventListener('DOMContentLoaded', drawPyramid)
