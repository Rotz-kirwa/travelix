// Include live notifications on all pages
document.addEventListener('DOMContentLoaded', function() {
    // Add CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'styles/live-notifications.css';
    document.head.appendChild(css);
    
    // Add JS
    const script = document.createElement('script');
    script.src = 'js/live-notifications.js';
    document.body.appendChild(script);
});