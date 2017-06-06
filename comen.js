var bullets = new Array();

$(function () {

    randomPlayerPos();
    controls();
    setInterval(function(){
        bullets.forEach(function(item, i, arr) {
            var b = item[0];

            if(parseInt(b.style.top) < 0) b.remove();


            b.style.top = (parseInt(b.style.top) - 4) + 'px';

        });
    }, 30);
});

/* document.getElementById('tank').style.transform = 'rotate(-90deg)'; */

function controls() {
    document.body.onkeydown = function (e) {
        var el = document.getElementById('tank');

        var KEYCODE_LEFT = 37;
        var KEYCODE_UP = 38;
        var KEYCODE_RIGHT = 39;
        var KEYCODE_DOWN = 40;
        var KEYCODE_SPACE = 32;

        if (e.keyCode == KEYCODE_LEFT) {
            el.style.left = (parseInt(el.style.left) - 10) + 'px',
						document.getElementById('tank').style.transform = 'rotate(180deg)';
        }
        else if (e.keyCode == KEYCODE_RIGHT) {
            el.style.left = (parseInt(el.style.left) + 10) + 'px';
						document.getElementById('tank').style.transform = 'rotate(0deg)';
        }
        else if (e.keyCode == KEYCODE_UP) {
            el.style.top = (parseInt(el.style.top) - 10) + 'px',
						document.getElementById('tank').style.transform = 'rotate(-90deg)';
        }
        else if (e.keyCode == KEYCODE_DOWN) {
            el.style.top = (parseInt(el.style.top) + 10) + 'px',
						document.getElementById('tank').style.transform = 'rotate(90deg)';
        }
        else if(e.keyCode == KEYCODE_SPACE){
            shoot();
        }

    };
}

function shoot() {
    var bullet = $('<div class="bullet" />');
    bullets.push(bullet);

    var pp = getPlayerPos();
    bullet.css({top: pp.y, left: pp.x});

    $('body').append(bullet);
}

function randomPlayerPos() {
    document.getElementById('tank').style.top = '10px';
    document.getElementById('tank').style.left = '10px';
}

function getPlayerPos() {
    return {
        "x" : document.getElementById('tank').style.left,
        "y": document.getElementById('tank').style.top
    };
}