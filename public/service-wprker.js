import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Ini buat cache file build (otomatis ditambahkan pas build)
precacheAndRoute(self.__WB_MANIFEST || []);

// Contoh: cache semua permintaan ke file statis
registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style',
  new StaleWhileRevalidate()
);
