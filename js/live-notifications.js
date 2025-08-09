// Live Notifications Script
const travelers = [
    { name: "Sarah Johnson", action: "just booked", destination: "Masai Mara Safari" },
    { name: "Michael Chen", action: "is traveling to", destination: "Serengeti National Park" },
    { name: "Emma Wilson", action: "just arrived in", destination: "Zanzibar Beach" },
    { name: "David Thompson", action: "booked", destination: "Mount Kilimanjaro Trek" },
    { name: "Lisa Rodriguez", action: "is exploring", destination: "Ngorongoro Crater" },
    { name: "James Miller", action: "just booked", destination: "Hot Air Balloon Safari" },
    { name: "Anna Garcia", action: "arrived in", destination: "Amboseli National Park" },
    { name: "Robert Taylor", action: "is traveling to", destination: "Lake Nakuru" },
    { name: "Maria Santos", action: "just booked", destination: "Cultural Safari Experience" },
    { name: "John Anderson", action: "arrived in", destination: "Tsavo National Park" },
    { name: "Sophie Brown", action: "is exploring", destination: "Diani Beach" },
    { name: "Alex Kumar", action: "just booked", destination: "Big Five Game Drive" },
    { name: "Jennifer White", action: "is traveling to", destination: "Samburu National Reserve" },
    { name: "Carlos Martinez", action: "just arrived in", destination: "Mombasa Coast" },
    { name: "Rachel Green", action: "booked", destination: "Gorilla Tracking Adventure" },
    { name: "Kevin O'Connor", action: "is exploring", destination: "Hell's Gate National Park" },
    { name: "Priya Patel", action: "just booked", destination: "Sunrise Safari Experience" },
    { name: "Thomas Mueller", action: "arrived in", destination: "Maasai Village Tour" },
    { name: "Isabella Rossi", action: "is traveling to", destination: "Lake Naivasha" },
    { name: "Ahmed Hassan", action: "just booked", destination: "Desert Safari Adventure" },
    { name: "Grace Ochieng", action: "is exploring", destination: "Aberdare National Park" },
    { name: "Pierre Dubois", action: "arrived in", destination: "Mount Kenya Trek" },
    { name: "Yuki Tanaka", action: "just booked", destination: "Photographic Safari" },
    { name: "Oliver Smith", action: "is traveling to", destination: "Lamu Island" },
    { name: "Fatima Al-Zahra", action: "just arrived in", destination: "Watamu Beach" },
    { name: "Lucas Silva", action: "booked", destination: "Night Game Drive" },
    { name: "Chloe Anderson", action: "is exploring", destination: "Ol Pejeta Conservancy" },
    { name: "Raj Sharma", action: "just booked", destination: "Walking Safari" },
    { name: "Nina Petrov", action: "arrived in", destination: "Shimba Hills Reserve" },
    { name: "Hassan Mwangi", action: "is traveling to", destination: "Malindi Marine Park" }
];

let currentIndex = 0;
let notificationTimeout;

function showNotification() {
    const notification = document.getElementById('live-notification');
    const travelerName = document.getElementById('traveler-name');
    const actionText = document.getElementById('action-text');
    const destination = document.getElementById('destination');
    
    const traveler = travelers[currentIndex];
    
    travelerName.textContent = traveler.name;
    actionText.textContent = traveler.action;
    destination.textContent = traveler.destination;
    
    notification.classList.add('show');
    
    // Hide notification after 3 seconds
    notificationTimeout = setTimeout(() => {
        hideNotification();
    }, 3000);
    
    currentIndex = (currentIndex + 1) % travelers.length;
}

function hideNotification() {
    const notification = document.getElementById('live-notification');
    notification.classList.remove('show');
}

// Close notification when X is clicked
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        clearTimeout(notificationTimeout);
        hideNotification();
    });
    
    // Show first notification after 3.5 seconds
    setTimeout(showNotification, 3500);
    
    // Show subsequent notifications every 3.5 seconds
    setInterval(showNotification, 3500);
});