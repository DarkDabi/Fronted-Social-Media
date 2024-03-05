document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('video-container');
    var image = container.querySelector('img');
    var video = container.querySelector('video');

    // Wanneer de muis over het element beweegt, speel de video af
    container.addEventListener('mouseenter', function() {
        image.style.display = 'none';
        video.style.display = 'block';
        video.play();
    });

    // Wanneer de muis het element verlaat, stop de video en toon de afbeelding
    container.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0;
        image.style.display = 'block';
        video.style.display = 'none';
    });
});

