// var image = document.getElementById('image1');
// var video = document.getElementById('video1');
// var videoContainer = document.getElementById('videoContainer');
// var mouseOverImage = false;

// video.style.display = 'none'; // Initially hide the video

// videoContainer.addEventListener('mouseenter', function() {
//     mouseOverImage = true;
//     setTimeout(function() {
//         if (mouseOverImage) {
//             image.style.display = 'none';
//             video.style.display = 'block';
//             video.play();
//         }
//     }, 1000);
// });

// videoContainer.addEventListener('mouseleave', function() {
//     mouseOverImage = false;
//     video.pause();
//     video.currentTime = 0;
//     image.style.display = 'block';
//     video.style.display = 'none';
// });
class Video {
    constructor(title, image, time, username) {
        this.title = title;
        this.image = image;
        this.time = time;
        this.username = username;
    }
}username;

fetch("./MOCK_DATA.json")
.then(response => response.json())
.then(data =>{console.log(data);
   let post = new Video(data.name, data.img)
   data.forEach(videoData => {
    // Maak een nieuw Video-object aan met de gegevens van de JSON
    let video = new Video(videoData.title, videoData.image, videoData.time, videoData.username);

    // Maak een HTML-element aan voor de video en voeg deze toe aan de pagina
    let videoElement = document.createElement('div');
    videoElement.innerHTML = `
        <div class="video">
            <img src="${video.image}" alt="${video.title}">
            <h2>${video.title}</h2>
            <p>${video.time}</p>
            <p>${video.username}</p>
        </div>
    `;
    document.getElementById('dataContainer').appendChild(videoElement);
});
})
   .catch(error => console.error('Error fetching JSON:', error));




   const popup = document.getElementById('popup');
   const popupTitle = document.getElementById('popup-title');
   const playButton = document.getElementById('play-button');
   const commentsButton = document.getElementById('comments-button');
   const movieLinks = document.querySelectorAll('.movie-link');
 
   
   function showPopup(movieTitle) {
     popupTitle.textContent = movieTitle;
     popup.style.display = 'block';
   }
 
   
   movieLinks.forEach(link => {
     link.addEventListener('click', function(event) {
       event.preventDefault();
       const movieTitle = this.getAttribute('data-movie');
       showPopup(movieTitle);
     });
   });
 
   
   playButton.addEventListener('click', function() {
     alert('Play the movie!');
   });
 
   commentsButton.addEventListener('click', function() {
     alert('View comments about the movie!');
   });