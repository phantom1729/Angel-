self.addEventListener('push', function(event) {
    const options = {
        body: '🚨 EMERGENCY ALERT! Someone needs help nearby!',
        icon: 'icon.png',
        vibrate: [500, 200, 500],
        requireInteraction: true
    };
    event.waitUntil(self.registration.showNotification('Rakshak Angel Mode', options));
});

