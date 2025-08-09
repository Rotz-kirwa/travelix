// Live Travel Notifications - Meek Trails Style
(function() {
    const notifications = [
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Eliud</strong> booked a hotel in Mombasa',
            time: '2 min ago',
            location: 'Kenya'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Ken</strong> traveled to Paris',
            time: '5 min ago',
            location: 'France'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>Ashley</strong> arrived from Greece tour',
            time: '8 min ago',
            location: 'Greece'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>James</strong> booked safari in Masai Mara',
            time: '12 min ago',
            location: 'Kenya'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Maria</strong> traveled to Dubai',
            time: '15 min ago',
            location: 'UAE'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>David</strong> arrived from Thailand tour',
            time: '18 min ago',
            location: 'Thailand'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Sarah</strong> booked a hotel in Zanzibar',
            time: '22 min ago',
            location: 'Tanzania'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Michael</strong> traveled to London',
            time: '25 min ago',
            location: 'UK'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>Lisa</strong> arrived from Egypt tour',
            time: '28 min ago',
            location: 'Egypt'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Peter</strong> booked safari in Amboseli',
            time: '32 min ago',
            location: 'Kenya'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Grace</strong> traveled to Spain',
            time: '35 min ago',
            location: 'Spain'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>John</strong> arrived from Italy tour',
            time: '38 min ago',
            location: 'Italy'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Catherine</strong> booked a hotel in Nairobi',
            time: '42 min ago',
            location: 'Kenya'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Robert</strong> traveled to Turkey',
            time: '45 min ago',
            location: 'Turkey'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>Emma</strong> arrived from Morocco tour',
            time: '48 min ago',
            location: 'Morocco'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Daniel</strong> booked safari in Tsavo',
            time: '52 min ago',
            location: 'Kenya'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Nancy</strong> traveled to Germany',
            time: '55 min ago',
            location: 'Germany'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>Brian</strong> arrived from Japan tour',
            time: '58 min ago',
            location: 'Japan'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Alice</strong> booked a hotel in Diani',
            time: '1 hr ago',
            location: 'Kenya'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Samuel</strong> traveled to Australia',
            time: '1 hr ago',
            location: 'Australia'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>Rachel</strong> arrived from China tour',
            time: '1 hr ago',
            location: 'China'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Kevin</strong> booked safari in Samburu',
            time: '1 hr ago',
            location: 'Kenya'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Linda</strong> traveled to Canada',
            time: '1 hr ago',
            location: 'Canada'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>Paul</strong> arrived from Brazil tour',
            time: '2 hr ago',
            location: 'Brazil'
        }
    ];

    let currentIndex = 0;
    let notificationContainer;

    function createNotificationContainer() {
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.id = 'live-notifications';
            notificationContainer.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                z-index: 10000;
                pointer-events: none;
            `;
            document.body.appendChild(notificationContainer);
        }
    }

    function showNotification() {
        createNotificationContainer();
        
        const notification = notifications[currentIndex];
        const notificationEl = document.createElement('div');
        
        notificationEl.className = 'notification-popup';
        notificationEl.setAttribute('data-type', notification.type);
        notificationEl.style.cssText = `
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
            padding: 16px 20px;
            min-width: 300px;
            max-width: 350px;
            margin-bottom: 10px;
            transform: translateX(-100%);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            pointer-events: all;
            border-left: 4px solid ${notification.type === 'booking' ? '#28a745' : notification.type === 'inquiry' ? '#17a2b8' : '#fa9e1b'};
            font-family: 'Open Sans', Arial, sans-serif;
        `;
        
        notificationEl.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="
                    flex-shrink: 0;
                    width: 36px;
                    height: 36px;
                    background: linear-gradient(135deg, ${notification.type === 'booking' ? '#28a745, #20c997' : notification.type === 'inquiry' ? '#17a2b8, #20c997' : '#fa9e1b, #e8890b'});
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <i class="fa ${notification.icon}" style="color: #fff; font-size: 16px;"></i>
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 14px; color: #333; line-height: 1.4; margin-bottom: 4px;">
                        ${notification.message}
                    </div>
                    <div style="font-size: 12px; color: #666; font-weight: 500;">
                        ${notification.time} • ${notification.location}
                    </div>
                </div>
                <div class="notification-close" style="
                    flex-shrink: 0;
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: background 0.2s ease;
                    pointer-events: all;
                " onclick="this.parentElement.parentElement.remove()">
                    <i class="fa fa-times" style="font-size: 12px; color: #999;"></i>
                </div>
            </div>
        `;
        
        notificationContainer.appendChild(notificationEl);
        
        // Trigger animation
        setTimeout(() => {
            notificationEl.style.transform = 'translateX(0)';
            notificationEl.style.opacity = '1';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notificationEl.parentNode) {
                notificationEl.style.transform = 'translateX(-100%)';
                notificationEl.style.opacity = '0';
                setTimeout(() => {
                    if (notificationEl.parentNode) {
                        notificationEl.remove();
                    }
                }, 400);
            }
        }, 5000);
        
        currentIndex = (currentIndex + 1) % notifications.length;
    }

    // Initialize notifications when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        // Start first notification after 3 seconds
        setTimeout(showNotification, 3000);
        
        // Show new notification every 8 seconds
        setInterval(showNotification, 8000);
    }

    init();
})();

// Mobile responsive adjustments
if (window.innerWidth <= 768) {
    const style = document.createElement('style');
    style.textContent = `
        #live-notifications {
            bottom: 10px !important;
            left: 10px !important;
            right: 10px !important;
        }
        .notification-popup {
            min-width: auto !important;
            max-width: none !important;
            width: calc(100% - 20px) !important;
            padding: 14px 16px !important;
        }
    `;
    document.head.appendChild(style);
}