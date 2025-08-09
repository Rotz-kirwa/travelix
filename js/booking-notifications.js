// Live Booking Notifications - Traveler Names Animation
(function() {
    const bookingNotifications = [
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Sarah Johnson</strong> just booked Masai Mara Safari',
            time: '2 min ago',
            location: 'Kenya'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Michael Chen</strong> completed booking to Dubai',
            time: '4 min ago',
            location: 'UAE'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Emma Williams</strong> booked luxury lodge in Amboseli',
            time: '7 min ago',
            location: 'Kenya'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>David Martinez</strong> is viewing this booking page',
            time: '9 min ago',
            location: 'Spain'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Lisa Thompson</strong> just booked Zanzibar getaway',
            time: '12 min ago',
            location: 'Tanzania'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>James Wilson</strong> completed Paris tour booking',
            time: '15 min ago',
            location: 'France'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Maria Garcia</strong> booked Samburu safari package',
            time: '18 min ago',
            location: 'Kenya'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>Robert Brown</strong> is comparing booking options',
            time: '21 min ago',
            location: 'UK'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Jennifer Davis</strong> just booked Thailand adventure',
            time: '24 min ago',
            location: 'Thailand'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Kevin Miller</strong> completed Egypt tour booking',
            time: '27 min ago',
            location: 'Egypt'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Amanda Taylor</strong> booked Tsavo East safari',
            time: '30 min ago',
            location: 'Kenya'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>Daniel Anderson</strong> is filling booking form',
            time: '33 min ago',
            location: 'Germany'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Rachel White</strong> just booked Morocco tour',
            time: '36 min ago',
            location: 'Morocco'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Christopher Lee</strong> completed Turkey booking',
            time: '39 min ago',
            location: 'Turkey'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Ashley Moore</strong> booked Lake Nakuru tour',
            time: '42 min ago',
            location: 'Kenya'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>Matthew Jackson</strong> is viewing accommodation options',
            time: '45 min ago',
            location: 'Australia'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Stephanie Clark</strong> just booked Italy vacation',
            time: '48 min ago',
            location: 'Italy'
        },
        {
            type: 'visitor',
            icon: 'fa-plane',
            message: '<strong>Brian Rodriguez</strong> completed Japan tour booking',
            time: '51 min ago',
            location: 'Japan'
        },
        {
            type: 'booking',
            icon: 'fa-check-circle',
            message: '<strong>Nicole Lewis</strong> booked Diani Beach resort',
            time: '54 min ago',
            location: 'Kenya'
        },
        {
            type: 'inquiry',
            icon: 'fa-map-marker',
            message: '<strong>Anthony Walker</strong> is selecting travel dates',
            time: '57 min ago',
            location: 'Canada'
        }
    ];

    let currentIndex = 0;
    let notificationContainer;

    function createNotificationContainer() {
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.id = 'booking-notifications';
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

    function showBookingNotification() {
        createNotificationContainer();
        
        const notification = bookingNotifications[currentIndex];
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
        
        // Auto remove after 6 seconds
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
        }, 6000);
        
        currentIndex = (currentIndex + 1) % bookingNotifications.length;
    }

    // Initialize booking notifications when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        // Start first notification after 4 seconds
        setTimeout(showBookingNotification, 4000);
        
        // Show new notification every 10 seconds
        setInterval(showBookingNotification, 10000);
    }

    init();
})();

// Mobile responsive adjustments
if (window.innerWidth <= 768) {
    const style = document.createElement('style');
    style.textContent = `
        #booking-notifications {
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