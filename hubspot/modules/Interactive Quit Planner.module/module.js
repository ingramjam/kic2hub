<script>
document.addEventListener('DOMContentLoaded', () => {
    function initializeQuitPlanner(instanceId) {
        const plannerWrapper = document.getElementById('step1-foundation-' + instanceId)?.closest('.container'); // Get the main container of the planner instance
        if (!plannerWrapper) {
            // console.warn("Planner container not found for instance: " + instanceId);
            return;
        }

        const quitDateInput = plannerWrapper.querySelector('#quitDate-' + instanceId);
        const reasonsInput = plannerWrapper.querySelector('#reasons-' + instanceId);
        const summaryContentDiv = plannerWrapper.querySelector('#planSummaryContent-' + instanceId);
        const emailPlanBtn = plannerWrapper.querySelector('#emailPlanBtn-' + instanceId);
        const copyPlanBtn = plannerWrapper.querySelector('#copyPlanBtn-' + instanceId);
        const copyFeedbackEl = plannerWrapper.querySelector('#copyFeedback-' + instanceId);

        if (!quitDateInput || !reasonsInput || !summaryContentDiv || !emailPlanBtn || !copyPlanBtn || !copyFeedbackEl) {
            // console.warn("One or more core planner elements not found for instance: " + instanceId + ". Email/Copy functionality might be affected.");
            // return; // Decide if you want to exit or allow partial functionality
        }
        
        const plan = {
            quitTypes: [],
            quitDate: '',
            reasons: '',
            prepStrategies: [],
            copeStrategies: [],
            stayStrategies: []
        };

        const allCheckboxes = plannerWrapper.querySelectorAll('input[type="checkbox"]');
        const allTextInputs = [quitDateInput, reasonsInput];

        function updatePlanSummary() {
            if (quitDateInput) plan.quitDate = quitDateInput.value;
            if (reasonsInput) plan.reasons = reasonsInput.value;
            
            plan.quitTypes = Array.from(plannerWrapper.querySelectorAll('#step1-foundation-' + instanceId + ' input[name="quit_type"]:checked')).map(cb => cb.value);
            plan.prepStrategies = Array.from(plannerWrapper.querySelectorAll('#step2-prepare-' + instanceId + ' input[type="checkbox"]:checked')).map(cb => cb.value);
            plan.copeStrategies = Array.from(plannerWrapper.querySelectorAll('#step3-quitday-' + instanceId + ' input[type="checkbox"]:checked')).map(cb => cb.value);
            plan.stayStrategies = Array.from(plannerWrapper.querySelectorAll('#step4-stayquit-' + instanceId + ' input[type="checkbox"]:checked')).map(cb => cb.value);

            let summaryHTML = '';
            if (plan.quitDate) {
                try {
                    // Adding 'T00:00:00' ensures the date is interpreted in local timezone consistently
                    summaryHTML += `<h4>My Quit Date:</h4><p>${new Date(plan.quitDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>`;
                } catch (e) {
                    summaryHTML += `<h4>My Quit Date:</h4><p>${plan.quitDate} (Please ensure date is valid)</p>`;
                }
            }
            if (plan.quitTypes.length > 0) {
                summaryHTML += `<h4>I am quitting:</h4><ul>${plan.quitTypes.map(item => `<li>${item}</li>`).join('')}</ul>`;
            }
            if (plan.reasons && plan.reasons.trim() !== '') {
                summaryHTML += `<h4>My Reasons for Quitting:</h4><p>${plan.reasons.replace(/\n/g, '<br>')}</p>`;
            }
            if (plan.prepStrategies.length > 0) {
                summaryHTML += `<h4>My Preparation Strategies:</h4><ul>${plan.prepStrategies.map(item => `<li>${item}</li>`).join('')}</ul>`;
            }
            if (plan.copeStrategies.length > 0) {
                summaryHTML += `<h4>My Coping Strategies for Quit Day & Early Weeks:</h4><ul>${plan.copeStrategies.map(item => `<li>${item}</li>`).join('')}</ul>`;
            }
            if (plan.stayStrategies.length > 0) {
                summaryHTML += `<h4>My Strategies for Staying Quit:</h4><ul>${plan.stayStrategies.map(item => `<li>${item}</li>`).join('')}</ul>`;
            }
            
            // Fallback text from the module field, or a hardcoded default if the field is empty
            const summaryPlaceholderText = "{{ module.summary_placeholder|default('Your plan will appear here as you make selections.')|escapejs }}";

            if (summaryContentDiv) {
                if (!summaryHTML.trim()) {
                    summaryContentDiv.innerHTML = `<p class="text-center text-apple-gray-medium">${summaryPlaceholderText}</p>`;
                } else {
                     summaryContentDiv.innerHTML = summaryHTML;
                }
            }
        }
        
        function getPlanAsText() {
            let text = "My Personalized Quit Plan\n=========================\n\n";
            if (plan.quitDate) {
                 try {
                    text += `My Quit Date: ${new Date(plan.quitDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\n\n`;
                } catch (e) { text += `My Quit Date: ${plan.quitDate}\n\n`;}
            }
            if (plan.quitTypes.length > 0) {
                text += "I am quitting:\n";
                plan.quitTypes.forEach(item => text += `- ${item}\n`);
                text += "\n";
            }
            if (plan.reasons && plan.reasons.trim() !== '') {
                text += `My Reasons for Quitting:\n${plan.reasons}\n\n`;
            }
            if (plan.prepStrategies.length > 0) {
                text += "My Preparation Strategies:\n";
                plan.prepStrategies.forEach(item => text += `- ${item}\n`);
                text += "\n";
            }
            if (plan.copeStrategies.length > 0) {
                text += "My Coping Strategies for Quit Day & Early Weeks:\n";
                plan.copeStrategies.forEach(item => text += `- ${item}\n`);
                text += "\n";
            }
            if (plan.stayStrategies.length > 0) {
                text += "My Strategies for Staying Quit:\n";
                plan.stayStrategies.forEach(item => text += `- ${item}\n`);
                text += "\n";
            }
            text += "\nPowered by Kick It California - You can do this!";
            return text;
        }

        allTextInputs.forEach(input => {
            if (input) input.addEventListener('input', updatePlanSummary);
        });

        allCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const checklistItem = checkbox.closest('.checklist-item');
                if (checklistItem) {
                    checklistItem.classList.toggle('selected', checkbox.checked);
                }
                updatePlanSummary();
            });
        });
        
        // Initial summary update
        updatePlanSummary();

        if (emailPlanBtn) {
            emailPlanBtn.addEventListener('click', () => {
                console.log("Email My Plan button clicked for instance:", instanceId);
                const subject = "My Kick It California Quit Plan"; // This can be made a module field
                const body = getPlanAsText();
                const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                console.log("Plan text for email:", body);
                console.log("Generated mailto link:", mailtoLink);
                
                if (mailtoLink.length > 2000) { 
                    alert("Your plan is quite detailed! The email body might be too long for direct email. Please use the 'Copy My Plan' button and paste it into your email program, or try to shorten some of your written notes.");
                    return;
                }
                window.location.href = mailtoLink;
            });
        }

        if (copyPlanBtn) {
            copyPlanBtn.addEventListener('click', () => {
                console.log("Copy My Plan button clicked for instance:", instanceId);
                const planText = getPlanAsText();
                 console.log("Plan text to copy:", planText);
                navigator.clipboard.writeText(planText).then(() => {
                    if (copyFeedbackEl) {
                        copyFeedbackEl.textContent = "Plan copied to clipboard!";
                        setTimeout(() => { copyFeedbackEl.textContent = ""; }, 3000);
                    }
                }).catch(err => {
                    console.error('Failed to copy plan: ', err);
                    if (copyFeedbackEl) {
                        copyFeedbackEl.textContent = "Failed to copy. Please try manually.";
                        setTimeout(() => { copyFeedbackEl.textContent = ""; }, 3000);
                    }
                });
            });
        }

        // Make whole checklist item clickable
        plannerWrapper.querySelectorAll('.checklist-item').forEach(item => {
            item.addEventListener('click', (event) => {
                const checkbox = item.querySelector('input[type="checkbox"]');
                // Only toggle if the click wasn't directly on the checkbox or its actual label element
                if (checkbox && event.target !== checkbox && event.target.tagName !== 'LABEL') {
                    checkbox.checked = !checkbox.checked;
                    // Manually dispatch change event for consistency and to trigger other listeners
                    const changeEvent = new Event('change', { bubbles: true });
                    checkbox.dispatchEvent(changeEvent);
                }
            });
        });
    }

    // Initialize for all planner instances on the page
    // Assumes your module's main wrapper div (the one containing all sections) has a class like 'interactive-quit-planner-module'
    // and each section within it has an ID starting with 'step1-foundation-' + instanceId
    const plannerModules = document.querySelectorAll('.interactive-quit-planner-module');
    plannerModules.forEach(moduleWrapper => {
        const firstSection = moduleWrapper.querySelector('section[id^="step1-foundation-"]');
        if (firstSection) {
            const instanceId = firstSection.id.replace('step1-foundation-', '');
            if (instanceId) {
                initializeQuitPlanner(instanceId);
            }
        }
    });
});
</script>