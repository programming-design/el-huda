const CACHE = 'elhuda-v1';
const STATIC = [
  '/index.html','/style.css','/lang.js','/content.js','/render.js','/effects.js','/tools.js',
  '/quran.html','/prayer.html','/asmaullah.html','/stories.html','/tools.html',
  '/assets/logo.png','/assets/mosque.svg','/assets/quran-art.svg','/assets/prayer-art.svg','/assets/geometric.svg','/assets/asma-art.svg'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC).catch(()=>{})));
  self.skipWaiting();
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(cached=>{
      if(cached) return cached;
      return fetch(e.request).then(res=>{
        if(res && res.status===200 && e.request.method==='GET'){
          const clone = res.clone();
          caches.open(CACHE).then(c=>c.put(e.request, clone));
        }
        return res;
      }).catch(()=> caches.match('/index.html'));
    })
  );
});
