(function() {
    const moduleElement = document.querySelector('[data-module-id="{{name}}"]');
    if (!moduleElement) {
        console.warn("KICA-3-Step-Plan.module: Root element not found (data-module-id: {{name}}). Flip functionality might not be initialized for this instance.");
        return; 
    }
    console.log("KICA-3-Step-Plan.module JS loaded for instance: {{name}}", moduleElement);

    const flipCards = moduleElement.querySelectorAll('.flip-card');
    console.log("Found flip cards in this module instance:", flipCards.length, flipCards);

    if (flipCards.length > 0) {
        flipCards.forEach((card, index) => {
            const innerCard = card.querySelector('.flip-card-inner');
            if (!innerCard) {
                console.warn("Card " + index + " is missing .flip-card-inner within module: {{name}}");
                return; 
            }
            
            const flipAction = (event) => {
                // Prevent flipping if a link/button *inside the card back* was the specific click target
                // This helps if your rich text on the back has links.
                if (event && event.target.closest('.flip-card-back a, .flip-card-back button')) {
                    console.log("Interactive element on card back clicked, allowing default action, not flipping card " + index);
                    // event.stopPropagation(); // May or may not be needed depending on other listeners
                    return; 
                }
                console.log("Flip action triggered for card " + index);
                innerCard.classList.toggle('is-flipped');
            };

            card.addEventListener('click', flipAction);

            card.addEventListener('keydown', function(event) {
                if (document.activeElement === card && (event.code === 'Space' || event.code === 'Enter')) {
                    event.preventDefault(); 
                    console.log("Keyboard flip action for card " + index);
                    flipAction(event); // Pass event for consistency, though not used in this specific path
                }
            });
        });
    } else {
        console.log("No .flip-card elements found within this module instance: {{name}} to attach listeners.");
    }

    // Scroll Animation for the whole section
    if (moduleElement.classList.contains('scroll-animate')) {
        if (typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); 
                    }
                });
            }, { root: null, threshold: 0.1 });
            observer.observe(moduleElement);
        } else {
            moduleElement.classList.add('is-visible');
        }
    }
})();