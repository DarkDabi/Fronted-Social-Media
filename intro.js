   // Wachten tot de introductievideo is afgelopen
   document.addEventListener('DOMContentLoaded', function() {
    var introVideo = document.getElementById('intro-video');
    var loadingVideo = document.getElementById('loading-video');
    var overlay = document.getElementById('overlay');
    introVideo.addEventListener('ended', function() {
        // Video is afgelopen, instellen dat de introductie is afgespeeld
        document.cookie = "introPlayed=true; path=/";
        // Verberg de introductievideo
        introVideo.style.display = 'none';
        // Toon de overlay met de laadanimatie
        overlay.style.display = 'block';
        // Speel de laadvideo af
        loadingVideo.style.display = 'block'; // Maak de laadvideo zichtbaar
        loadingVideo.play();
    });
    loadingVideo.addEventListener('ended', function() {
        // Laadvideo is afgelopen, doorsturen naar index.html
        window.location.href = 'index.html';
    });
    introVideo.addEventListener('play', function() {
        // Verwijder de introPlayed cookie wanneer de video opnieuw wordt afgespeeld
        document.cookie = "introPlayed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
});