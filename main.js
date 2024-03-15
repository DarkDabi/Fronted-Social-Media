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
class Video{
    id;
    data; 
    image;
    title;
    time;
    username;
}
fetch("./MOCK_DATA.json")
.then(response => response.json())
.then(data =>{console.log(data);
   let post = new Video(data.name, data.img)
   
       document.createHTML('Video');
  
       Elemental.render(document.getElementById('dataContainer'), data);
   })
   .catch(error => console.error('Error fetching JSON:', error));