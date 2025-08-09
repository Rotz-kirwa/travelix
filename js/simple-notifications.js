// Simple Live Notifications - Direct Implementation
const notifications = [
    "Recent Travel Alert: Sarah M. just booked Kenya Safari - 15 Minutes Ago",
    "Visitor Moved: John D. moved to Serengeti - 15 Minutes Ago", 
    "Live Travel Update: Emma L. viewing Masai Mara - 15 Minutes Ago",
    "Recent Travel Alert: Michael R. just booked Tanzania - 15 Minutes Ago",
    "Visitor Moved: Lisa K. moved to Zanzibar - 15 Minutes Ago",
    "Live Travel Update: David W. viewing Ngorongoro - 15 Minutes Ago",
    "Recent Travel Alert: Anna S. just booked Amboseli - 15 Minutes Ago",
    "Visitor Moved: Tom B. moved to Lake Nakuru - 15 Minutes Ago",
    "Live Travel Update: Maria G. viewing Maldives - 15 Minutes Ago",
    "Recent Travel Alert: Chris P. just booked Swiss Alps - 15 Minutes Ago",
    "Visitor Moved: Jessica R. moved to Santorini - 15 Minutes Ago",
    "Live Travel Update: Robert K. viewing Bali - 15 Minutes Ago",
    "Recent Travel Alert: Amanda T. just booked Dubai - 15 Minutes Ago",
    "Visitor Moved: James H. moved to Tokyo - 15 Minutes Ago",
    "Live Travel Update: Sophie L. viewing Paris - 15 Minutes Ago",
    "Recent Travel Alert: Daniel M. just booked New York - 15 Minutes Ago",
    "Visitor Moved: Rachel W. moved to Rome - 15 Minutes Ago",
    "Live Travel Update: Kevin J. viewing London - 15 Minutes Ago",
    "Recent Travel Alert: Nicole B. just booked Thailand - 15 Minutes Ago",
    "Visitor Moved: Mark S. moved to Morocco - 15 Minutes Ago"
];

let currentIndex = 0;

function createNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        border-left: 4px solid #fa9e1b;
        max-width: 350px;
        z-index: 9999;
        font-family: Arial, sans-serif;
        font-size: 14px;
        color: #333;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 30px; height: 30px; background: #fa9e1b; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">✓</div>
            <div>${notifications[currentIndex]}</div>
            <div style="cursor: pointer; margin-left: auto; font-size: 16px;" onclick="this.parentElement.parentElement.remove()">×</div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(-100%)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
    
    currentIndex = (currentIndex + 1) % notifications.length;
}

// Start notifications
setTimeout(createNotification, 1000);
setInterval(createNotification, 4000);