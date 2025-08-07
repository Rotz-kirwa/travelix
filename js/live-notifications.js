// Live Notifications System
class LiveNotifications {
    constructor() {
        this.notifications = [
            { name: "Sarah M.", location: "Maldives", time: "2 minutes ago", type: "booking" },
            { name: "John D.", location: "Swiss Alps", time: "5 minutes ago", type: "booking" },
            { name: "Emma L.", location: "Santorini", time: "8 minutes ago", type: "inquiry" },
            { name: "Michael R.", location: "Bali", time: "12 minutes ago", type: "booking" },
            { name: "Lisa K.", location: "Dubai", time: "15 minutes ago", type: "booking" },
            { name: "David W.", location: "Tokyo", time: "18 minutes ago", type: "inquiry" },
            { name: "Anna S.", location: "Paris", time: "22 minutes ago", type: "booking" },
            { name: "Tom B.", location: "New York", time: "25 minutes ago", type: "booking" },
            { name: "Maria G.", location: "Rome", time: "28 minutes ago", type: "inquiry" },
            { name: "Chris P.", location: "London", time: "32 minutes ago", type: "booking" }
        ];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.createNotificationContainer();
        this.startNotifications();
    }

    createNotificationContainer() {
        const container = document.createElement('div');
        container.id = 'live-notifications';
        container.innerHTML = `
            <div class="notification-popup" id="notification-popup">
                <div class="notification-content">
                    <div class="notification-icon">
                        <i class="fa fa-check-circle"></i>
                    </div>
                    <div class="notification-text">
                        <div class="notification-message"></div>
                        <div class="notification-time"></div>
                    </div>
                    <div class="notification-close">
                        <i class="fa fa-times"></i>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(container);

        // Add close functionality
        container.querySelector('.notification-close').addEventListener('click', () => {
            this.hideNotification();
        });
    }

    showNotification() {
        const notification = this.notifications[this.currentIndex];
        const popup = document.getElementById('notification-popup');
        const messageEl = popup.querySelector('.notification-message');
        const timeEl = popup.querySelector('.notification-time');
        const iconEl = popup.querySelector('.notification-icon i');

        // Set content
        if (notification.type === 'booking') {
            messageEl.innerHTML = `<strong>${notification.name}</strong> just booked a trip to <strong>${notification.location}</strong>`;
            iconEl.className = 'fa fa-check-circle';
        } else {
            messageEl.innerHTML = `<strong>${notification.name}</strong> is viewing <strong>${notification.location}</strong>`;
            iconEl.className = 'fa fa-eye';
        }
        
        timeEl.textContent = notification.time;

        // Show notification
        popup.classList.add('show');

        // Auto hide after 5 seconds
        setTimeout(() => {
            this.hideNotification();
        }, 5000);

        // Move to next notification
        this.currentIndex = (this.currentIndex + 1) % this.notifications.length;
    }

    hideNotification() {
        const popup = document.getElementById('notification-popup');
        popup.classList.remove('show');
    }

    startNotifications() {
        // Show first notification after 2 seconds
        setTimeout(() => {
            this.showNotification();
        }, 2000);

        // Then show every 6-8 seconds
        setInterval(() => {
            this.showNotification();
        }, 7000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LiveNotifications();
});