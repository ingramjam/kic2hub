document.addEventListener('DOMContentLoaded', function() {
    // Find all instances of the horizontal scroller on the page
    const scrollerModules = document.querySelectorAll('.feature-scroll-wrapper');

    scrollerModules.forEach(function(moduleWrapper) {
        const scrollContainer = moduleWrapper.querySelector('.horizontal-scroll-container-cards');
        const prevButton = moduleWrapper.querySelector('.prev-arrow');
        const nextButton = moduleWrapper.querySelector('.next-arrow');

        if (!scrollContainer || !prevButton || !nextButton) {
            // If any essential element is missing in this module instance, skip it
            return; 
        }

        function updateArrowStates() {
            // Disable prev button if at the beginning
            prevButton.disabled = scrollContainer.scrollLeft <= 0;
            // Disable next button if at the end
            // scrollWidth is total width, clientWidth is visible width
            nextButton.disabled = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1; // -1 for potential subpixel issues
        }

        prevButton.addEventListener('click', function() {
            // Scroll left by approx one card width (200px + gap 1.5rem ~ 24px = 224px)
            // Or scroll by a percentage of the container's visible width
            const scrollAmount = scrollContainer.clientWidth * 0.8; // Scroll by 80% of visible width
            scrollContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextButton.addEventListener('click', function() {
            const scrollAmount = scrollContainer.clientWidth * 0.8;
            scrollContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Update arrow states on initial load and on scroll
        scrollContainer.addEventListener('scroll', updateArrowStates);
        
        // Call it once on load
        // Use a small timeout to ensure layout is complete for scrollWidth/clientWidth
        setTimeout(updateArrowStates, 100); 
        
        // Also update on window resize as clientWidth might change
        window.addEventListener('resize', function() {
            setTimeout(updateArrowStates, 100);
        });
    });
});