// Script to update all Book Now button links to booking.html
document.addEventListener('DOMContentLoaded', function() {
    // Find all links with "Book Now" text that currently point to "#"
    const bookNowLinks = document.querySelectorAll('a[href="#"]');
    
    bookNowLinks.forEach(link => {
        if (link.textContent.includes('Book Now')) {
            link.href = 'booking.html';
        }
    });
    
    // Also update any card buttons that might have # links
    const cardButtons = document.querySelectorAll('.card_button a[href="#"]');
    cardButtons.forEach(link => {
        link.href = 'booking.html';
    });
    
    console.log('Button links updated to booking.html');
});