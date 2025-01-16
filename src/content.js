// Listen for payment form elements
function detectPaymentForm() {
    const paymentSelectors = [
      'form:has(input[type="credit-card"])',
      'form:has(input[name*="card"])',
      '#payment',
      '.payment',
      '.checkout'
    ];
  
    for (const selector of paymentSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        console.log('Payment form detected');
        return element;
      }
    }
    return null;
  }
  
  // Initialize detection
  function init() {
    const paymentForm = detectPaymentForm();
    if (paymentForm) {
      // Future: Add offer suggestion UI here
    }
  }
  
  // Run on page load
  init();
  
  // Watch for dynamic content changes
  const observer = new MutationObserver(() => {
    init();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });