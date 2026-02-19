(function() {
    // Use the data-module-id attribute to get the root element of this module instance
    const moduleElement = document.querySelector('[data-module-id="{{name}}"]');

    if (!moduleElement) {
        // console.warn("KICA-Testimonials.module: Root element for scoping animations not found (data-module-id: {{name}}). Animations might not be scoped or run.");
        return; 
    }

    // Apply video settings from data attributes
    const videos = moduleElement.querySelectorAll('.testimonial-video');
    videos.forEach(video => {
        const autoplayAttr = video.getAttribute('data-autoplay');
        
        // Apply autoplay if needed
        if (autoplayAttr) {
            video.autoplay = true;
            video.muted = true;
        }
    });

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