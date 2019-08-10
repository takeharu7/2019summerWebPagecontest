(function () {
    'use strict';
    var Pink = document.getElementById('pink');
    var Green = document.getElementById('green');
    var Yellow = document.getElementById('yellow');

    var deg = 0;
    function rotateHeader() {
        deg = deg + 6;
        Pink.style.transform = 'rotateZ(' + deg + 'deg)';
        Green.style.transform = 'rotateZ(' + deg + 'deg)';
        Yellow.style.transform = 'rotateZ(' + deg + 'deg)';
    }
    setInterval(rotateHeader, 1)
})();