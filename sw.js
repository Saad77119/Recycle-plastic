// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// It JUST CACHE Style Files!
// ++++++++++++++++++++++++++++++++++++++++++

(function() {
    'use strict'

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for (var registration of registrations) {
                    registration.unregister()
                        .then(function() {
                            return self.clients.matchAll()
                        })
                        .then(function(clients) {
                            clients.forEach(function(client) {
                                if (client.url && 'navigate' in client) {
                                    client.navigate(client.url)
                                }
                            })
                        })
                }
            })
        })
    }
})()