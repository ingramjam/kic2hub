(function() {
    // Use the data-module-id attribute to get the root element of this module instance
    const moduleElement = document.querySelector('[data-module-id="{{name}}"]');

    if (!moduleElement) {
        // console.warn("KICA-Testimonials.module: Root element for scoping animations not found (data-module-id: {{name}}). Animations might not be scoped or run.");
        return; 
    }

    // Video functionality
    const videoContainers = moduleElement.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        container.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video-url');
            if (videoUrl) {
                openVideoModal(videoUrl);
            }
        });
    });

    function openVideoModal(videoUrl) {
        // Handle empty/null URLs
        if (!videoUrl || videoUrl === 'undefined' || videoUrl === '') {
            console.warn('No video URL provided');
            return;
        }

        console.log('Opening video modal with URL:', videoUrl);
        
        // Check if it's a Hubspot media file or external URL
        let embedUrl = '';
        
        // Hubspot media files have specific URL patterns
        if (videoUrl.includes('hubspot') || videoUrl.includes('.mp4') || videoUrl.includes('.webm') || videoUrl.includes('.mov') || videoUrl.includes('.avi')) {
            // Hubspot media file - play directly
            const videoWrapper = document.createElement('div');
            videoWrapper.style.cssText = 'width:90%;max-width:900px;aspect-ratio:16/9;position:relative;';
            
            const video = document.createElement('video');
            video.src = videoUrl;
            video.controls = true;
            video.autoplay = true;
            video.style.cssText = 'width:100%;height:100%;border-radius:8px;';
            
            videoWrapper.appendChild(video);
            createModalWithContent(videoWrapper);
        } else if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
            // YouTube URL
            let videoId = '';
            if (videoUrl.includes('v=')) {
                videoId = videoUrl.split('v=')[1].split('&')[0];
            } else if (videoUrl.includes('youtu.be/')) {
                videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
            }
            if (videoId) {
                embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
                createVideoIframe(embedUrl);
            }
        } else if (videoUrl.includes('vimeo.com')) {
            // Vimeo URL
            const videoId = videoUrl.split('/').pop().split('?')[0];
            embedUrl = 'https://player.vimeo.com/video/' + videoId + '?autoplay=1';
            createVideoIframe(embedUrl);
        } else {
            console.warn('Unknown video URL format:', videoUrl);
        }
    }

    function createVideoIframe(embedUrl) {
        const videoWrapper = document.createElement('div');
        videoWrapper.style.cssText = 'width:90%;max-width:900px;aspect-ratio:16/9;position:relative;';
        
        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.style.cssText = 'width:100%;height:100%;border:none;border-radius:8px;';
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;
        
        videoWrapper.appendChild(iframe);
        createModalWithContent(videoWrapper);
    }

    function createModalWithContent(contentElement) {
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:9999;';
        
        modal.appendChild(contentElement);
        
        // Close on click outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modal.remove();
            }
        });
        
        document.body.appendChild(modal);
    }

    // Find elements to animate only within this module instance
    const elementsToObserve = moduleElement.querySelectorAll('.scroll-animate');

    if (!elementsToObserve || elementsToObserve.length === 0) {
        // console.log("KICA-Testimonials.module: No .scroll-animate elements found within module: {{name}}");
        return;
    }

    if (typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Optional: stop observing after it's visible once
                }
            });
        }, { 
            root: null, // observes intersections relative to the viewport
            threshold: 0.1  // Trigger when 10% of the element is visible
        });

        elementsToObserve.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers that don't support IntersectionObserver
        elementsToObserve.forEach(el => el.classList.add('is-visible'));
    }
})();