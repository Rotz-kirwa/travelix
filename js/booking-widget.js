// Quick Booking Widget Toggle
function toggleBookingWidget() {
    const widget = document.getElementById('quick-booking-widget');
    widget.classList.toggle('show');
}

// Auto-show widget after 10 seconds
setTimeout(() => {
    const widget = document.getElementById('quick-booking-widget');
    widget.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        widget.classList.remove('show');
    }, 5000);
}, 10000);

// Booking Form WhatsApp Submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const safariType = document.getElementById('safari-type').value;
            const travelDate = document.getElementById('travel-date').value;
            const travelersCount = document.getElementById('travelers-count').value;
            const customerName = document.getElementById('customer-name').value;
            const customerEmail = document.getElementById('customer-email').value;
            
            // Validate form
            if (!safariType || !travelDate || !travelersCount || !customerName || !customerEmail) {
                alert('Please fill in all fields');
                return;
            }
            
            // Create WhatsApp message
            const message = `🦁 *SAFARI BOOKING REQUEST* 🦁%0A%0A` +
                          `👤 *Name:* ${customerName}%0A` +
                          `📧 *Email:* ${customerEmail}%0A` +
                          `🎯 *Safari Type:* ${safariType}%0A` +
                          `📅 *Travel Date:* ${travelDate}%0A` +
                          `👥 *Number of Travelers:* ${travelersCount}%0A%0A` +
                          `Please send me a detailed quote for this safari experience. Thank you!`;
            
            // Open WhatsApp with message
            const whatsappURL = `https://wa.me/254713241666?text=${message}`;
            window.open(whatsappURL, '_blank');
            
            // Reset form and hide widget
            bookingForm.reset();
            document.getElementById('quick-booking-widget').classList.remove('show');
        });
    }
});