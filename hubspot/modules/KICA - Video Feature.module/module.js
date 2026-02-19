<script>
    // This script handles the fade-in-on-scroll animations
    document.addEventListener('DOMContentLoaded', () => {
        const scrollAnimatedElements = document.querySelectorAll('.scroll-animate');
        
        // Use IntersectionObserver for modern browsers
        if (typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            }, { 
                threshold: 0.1 // Trigger when 10% of the element is visible
            });

            scrollAnimatedElements.forEach(el => observer.observe(el));
        } else {
            // Fallback for older browsers that don't support IntersectionObserver
            scrollAnimatedElements.forEach(el => el.classList.add('is-visible'));
        }
  
    });
</script>