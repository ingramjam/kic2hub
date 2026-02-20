(function() {
    const snapContainer = document.getElementById('support-options-snap-container');
    const indicatorsContainer = document.getElementById('snap-indicators');
    
    if (!snapContainer || !indicatorsContainer) {
        // console.warn("Snap container or indicators container not found.");
        return;
    }

    const sections = Array.from(snapContainer.querySelectorAll('.snap-section-card'));
    
    if (sections.length === 0) {
        // console.warn("No .snap-section-card elements found.");
        indicatorsContainer.style.display = 'none'; // Hide if no sections
        return;
    }
    
    indicatorsContainer.innerHTML = ''; // Clear any existing indicators on re-run

    sections.forEach((section, index) => {
        if (!section.id) {
            // console.warn(`Snap section at index ${index} is missing an ID. Indicator cannot be created.`);
            return; 
        }
        const indicator = document.createElement('a');
        indicator.href = `#${section.id}`; // Corrected: Ensure # is present for valid fragment identifier
        indicator.setAttribute('aria-label', `Go to ${section.querySelector('h3')?.textContent || 'section ' + (index + 1)}`);
        indicatorsContainer.appendChild(indicator);

        indicator.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetSection = document.getElementById(section.id);
            if (targetSection) {
                // Scroll within the snapContainer
                const targetScrollTop = targetSection.offsetTop - snapContainer.offsetTop;
                snapContainer.scrollTo({
                    top: targetScrollTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const indicators = Array.from(indicatorsContainer.querySelectorAll('a'));
    if (indicators.length === 0) {
        // console.warn("No indicators were created (likely due to missing IDs on sections).");
        indicatorsContainer.style.display = 'none'; // Hide if no indicators actually got created
        return; 
    }

    // Observer for individual sections (to highlight active dot & control video)
    const sectionObserverOptions = {
        root: snapContainer, 
        threshold: 0.55, // 55% of the section must be visible within the snapContainer
    };

    let currentActiveIndicator = null;
    let currentlyActiveSectionElement = null;

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            if (!sectionId) return;

            const correspondingIndicator = indicatorsContainer.querySelector(`a[href="#${sectionId}"]`);
            const videoElement = entry.target.querySelector('.card-bg-video');

            if (!correspondingIndicator) return;

            if (entry.isIntersecting) {
                // Deactivate previous
                if (currentActiveIndicator) {
                    currentActiveIndicator.classList.remove('active');
                }
                if (currentlyActiveSectionElement && currentlyActiveSectionElement !== entry.target) {
                    const prevVideo = currentlyActiveSectionElement.querySelector('.card-bg-video');
                    if (prevVideo && typeof prevVideo.pause === 'function') {
                        prevVideo.pause();
                    }
                }
                
                // Activate current
                correspondingIndicator.classList.add('active');
                currentActiveIndicator = correspondingIndicator;
                currentlyActiveSectionElement = entry.target;

                if (videoElement && typeof videoElement.play === 'function' && videoElement.paused) {
                    videoElement.play().catch(error => console.warn("Video play prevented:", error));
                }
            } else {
                // Remove active class if it's this indicator and it's no longer intersecting
                if (correspondingIndicator.classList.contains('active')) {
                     correspondingIndicator.classList.remove('active');
                     if(currentActiveIndicator === correspondingIndicator) currentActiveIndicator = null;
                }
                if (currentlyActiveSectionElement === entry.target) currentlyActiveSectionElement = null;

                if (videoElement && typeof videoElement.pause === 'function' && !videoElement.paused) {
                    videoElement.pause();
                }
            }
        });
    }, sectionObserverOptions);

    sections.forEach(section => {
        if (section.id) { 
            sectionObserver.observe(section);
        }
    });
    
    // Set initial active indicator (give a slight delay for layout)
    setTimeout(() => {
        if (snapContainer.scrollTop < sections[0].offsetHeight * 0.5 && sections[0].id) {
            const firstIndicator = indicatorsContainer.querySelector(`a[href="#${sections[0].id}"]`);
            if (firstIndicator && !currentActiveIndicator) { 
                firstIndicator.classList.add('active');
                currentActiveIndicator = firstIndicator;
                currentlyActiveSectionElement = sections[0]; // Set initial active section
                
                // Play video of the first section if it's active and has video
                const firstVideo = sections[0].querySelector('.card-bg-video');
                if (firstVideo && typeof firstVideo.play === 'function' && firstVideo.paused) {
                    firstVideo.play().catch(error => console.warn("Initial video play prevented:", error));
                }
            }
        }
    }, 100);

    // Observer for the snapContainer itself (to show/hide all indicators)
    const containerObserverOptions = {
        root: null, // Observe intersection with the viewport
        threshold: 0.1 // 0.1 means 10% of the container needs to be visible
    };

    const containerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                indicatorsContainer.style.opacity = '1';
                indicatorsContainer.style.visibility = 'visible';
            } else {
                indicatorsContainer.style.opacity = '0';
                indicatorsContainer.style.visibility = 'hidden';
            }
        });
    }, containerObserverOptions);

    containerObserver.observe(snapContainer);

})();