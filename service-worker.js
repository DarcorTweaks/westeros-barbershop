const CACHE_NAME = "westeros-app";

const urlsToCache = [
  "login.html",
  "agenda.html",
  "cliente.html",
  "logo.png",
  "stark.png",
  "targaryen.png",
  "lannister.png",
  "baratheon.png",
  "greyjoy.png",
  "fondo.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});