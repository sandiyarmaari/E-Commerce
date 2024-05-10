// swipe.js
var topPickBoxes = document.getElementById('topPickBoxes');
var touchStartX = 0;
var touchMoveX = 0;
var scrolling = false;

topPickBoxes.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
    scrolling = true;
});

topPickBoxes.addEventListener('touchmove', function(event) {
    if (!scrolling) return;

    touchMoveX = event.touches[0].clientX;
    var deltaX = touchMoveX - touchStartX;

    // Prevent vertical scrolling
    if (Math.abs(deltaX) > 10) {
        event.preventDefault();
    }

    // Move horizontally
    topPickBoxes.scrollLeft -= deltaX;
    touchStartX = touchMoveX;
});

topPickBoxes.addEventListener('touchend', function() {
    scrolling = false;
});
