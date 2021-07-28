let selectBrick = $('#brick');
let selectNumber = $('#number');


function drawPyramid() {
    let height = selectNumber.val();
    let brick = selectBrick.val();
    $('#pyramid').text('');
    for (let i = 0; i < height; i++) {
        let innerPyramid = '&nbsp;'.repeat(height - i - 1) + brick.repeat(i + 2);
        $( '<p>', { html: innerPyramid } ).appendTo('#pyramid');

    };
};

selectBrick.on('input', drawPyramid);
selectNumber.on('input', drawPyramid);
$(document).ready(drawPyramid);