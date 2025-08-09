// Auto-include notifications on all pages
(function() {
    // Add CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'styles/live-notifications.css';
    document.head.appendChild(css);
    
    // Add main script
    const script = document.createElement('script');
    script.src = 'js/live-notifications.js';
    document.head.appendChild(script);
})();