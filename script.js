// const showBtn = document.querySelector('.navBtn');
// const topNav = document.querySelector('.top-nav');

// showBtn.addEventListener('click', function(){
//     if(topNav.classList.contains('showNav')){
//         topNav.classList.remove('showNav');
//         showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
//     } else {
//         topNav.classList.add('showNav');
//         showBtn.innerHTML = '<i class = "fas fa-times"></i>';
//     }
// });

// /* Lightbox */
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });



// Existing code for navigation toggle and lightbox
const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// New code for auto-playing videos on scroll
// Function to check if the video is in the viewport
function isVideoInViewport(video) {
    const rect = video.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Play the video when it's in the viewport
function handleScroll() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        if (isVideoInViewport(video)) {
            video.play();
        } else {
            video.pause();
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

// Unmute video when user interacts with it
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
        } else {
            video.muted = true;
        }
    });
});
