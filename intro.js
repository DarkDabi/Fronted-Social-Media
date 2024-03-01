// intro.js
document.addEventListener("DOMContentLoaded", function() {
    // Wait for the intro animation to finish
    var introContent = document.querySelector('.intro-content');

    // Replace intro with index after animation
    introContent.addEventListener('animationend', function() {
        window.location.replace("index.html");
    });
});
