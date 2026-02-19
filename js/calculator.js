/* ============================================
   Calculator JavaScript
   Kick It Ca Demo Site
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  initializeCalculator();
});

function initializeCalculator() {
  const priceInput = document.getElementById('pricePerUnit');
  const unitsInput = document.getElementById('unitsPerDay');
  const daysInput = document.getElementById('daysSober');

  // Add event listeners
  [priceInput, unitsInput, daysInput].forEach(input => {
    input.addEventListener('input', calculateSavings);
    input.addEventListener('change', calculateSavings);
  });

  // Initial calculation
  calculateSavings();
}

function calculateSavings() {
  const pricePerUnit = parseFloat(document.getElementById('pricePerUnit').value) || 0;
  const unitsPerDay = parseFloat(document.getElementById('unitsPerDay').value) || 0;
  const daysSober = parseFloat(document.getElementById('daysSober').value) || 0;

  // Calculate daily savings
  const dailySavings = pricePerUnit * unitsPerDay;
  
  // Calculate periods
  const weeklySavings = dailySavings * 7;
  const monthlySavings = dailySavings * 30;
  const annualSavings = dailySavings * 365;
  const totalSavings = dailySavings * daysSober;

  // Update display
  document.getElementById('weeklySavings').textContent = formatCurrency(weeklySavings);
  document.getElementById('monthlySavings').textContent = formatCurrency(monthlySavings);
  document.getElementById('annualSavings').textContent = formatCurrency(annualSavings);

  // Update milestone
  const milestone = document.getElementById('milestone');
  if (daysSober > 0) {
    milestone.innerHTML = `
      <p class="milestone-days">${Math.floor(daysSober)} days</p>
      <p class="milestone-amount">You've saved ${formatCurrency(totalSavings)}</p>
    `;
  } else {
    milestone.innerHTML = '';
  }
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll animation observer
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all cards and panels
  document.querySelectorAll('.snap-panel, .card-item, .testimonial-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
}
