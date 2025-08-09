// Video Slider JavaScript
$(document).ready(function() {
    var videos = $('.hero_video');
    var currentVideo = 0;
    
    // Ensure videos are loaded
    videos.each(function() {
        this.load();
    });
    
    // Initialize first video after a short delay
    setTimeout(function() {
        videos.eq(0).addClass('active');
        if (videos[0]) {
            videos[0].play().catch(function(error) {
                console.log('Video autoplay failed:', error);
            });
        }
    }, 500);
    
    // Listen for Owl Carousel slide changes
    $('.home_slider').on('changed.owl.carousel', function(event) {
        var slideIndex = event.item.index;
        
        // Hide all videos
        videos.removeClass('active').each(function() {
            this.pause();
        });
        
        // Show and play current video
        if (videos[slideIndex]) {
            videos.eq(slideIndex).addClass('active');
            videos[slideIndex].play().catch(function(error) {
                console.log('Video play failed:', error);
            });
        }
        
        currentVideo = slideIndex;
    });
    
    // Auto-sync video with slider initialization
    $('.home_slider').on('initialized.owl.carousel', function(event) {
        setTimeout(function() {
            videos.eq(0).addClass('active');
            if (videos[0]) {
                videos[0].play().catch(function(error) {
                    console.log('Video autoplay failed:', error);
                });
            }
        }, 1000);
    });
});