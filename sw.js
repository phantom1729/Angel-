self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    
    const options = {
        body: data.body || '🚨 RAKSHAK EMERGENCY! Help Needed!',
        icon: 'icon.png',
        vibrate: [1000, 500, 1000, 500, 1000],
        requireInteraction: true,
        data: { url: data.url || '#' }
    };

    event.waitUntil(
        self.registration.showNotification('ANGEL ALERT', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});

