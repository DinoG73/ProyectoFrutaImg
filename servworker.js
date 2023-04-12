//Check if the browser support service workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('servworker.js').then((reg) => {
        console.log('Service worker registered');
    }).catch((error) => {
        console.log('Service worker not registered');
    })
}
//Listen for the install event
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                './',
                './scss/style.min.css',
                './images/people1a.png',
                './images/people1.png',
                './images/people2.png',
                './images/people2a.png',
                './images/people3.png',
                './images/people4a.png',
                './images/people4.png',
                './js/main.js',
                './index.html',
                './login.html',
                './singup.html',
                './manifest.json',
                './servworker.js',
            ])
        })
    )
})

//Fetch new resources, update the cache, and save the resources
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((resp) => {
            return (
                resp ||
                fetch(e.request).then((response) => {
                    return caches
                        .open('v1')
                        .then((cache) => {
                            cache.put(e.request, response.clone())
                            return response
                        })
                        .cache(() => {
                            return caches.match('./offline.html')
                        })
                })
            )
        })

    )
})