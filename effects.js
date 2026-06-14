/* ============================================================
   effects.js — 3D background, animations, ripple, tilt
   ============================================================ */

/* ============ 3D Background (Three.js) ============ */
(function(){
  if(typeof THREE === 'undefined') return;
  const canvas = document.getElementById('bg3d');
  if(!canvas) return;
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
  camera.position.z = 9;
  scene.add(new THREE.AmbientLight(0x8fae9c, 1.2));
  const point = new THREE.PointLight(0xd4af6a, 2, 50);
  point.position.set(5,5,8); scene.add(point);
  const group = new THREE.Group(); scene.add(group);
  const goldMat = new THREE.MeshStandardMaterial({color:0xd4af6a,metalness:0.6,roughness:0.3,wireframe:true,transparent:true,opacity:0.5});
  const mintMat = new THREE.MeshStandardMaterial({color:0x4f8a6f,metalness:0.4,roughness:0.5,wireframe:true,transparent:true,opacity:0.35});
  const shapes = [];
  [new THREE.IcosahedronGeometry(1.4,0), new THREE.OctahedronGeometry(1.1,0), new THREE.TorusGeometry(1.2,0.18,8,24), new THREE.IcosahedronGeometry(0.8,0)].forEach((geo,i)=>{
    const mesh = new THREE.Mesh(geo, i%2===0?goldMat:mintMat);
    mesh.position.set((i-1.5)*3.0+(Math.random()-.5),(Math.random()-.5)*3,(Math.random()-.5)*3);
    mesh.userData.speed = 0.15+Math.random()*0.25;
    mesh.userData.axis = new THREE.Vector3(Math.random(),Math.random(),Math.random()).normalize();
    group.add(mesh); shapes.push(mesh);
  });
  let mouseX=0, mouseY=0;
  window.addEventListener('mousemove', e=>{ mouseX=(e.clientX/window.innerWidth-.5); mouseY=(e.clientY/window.innerHeight-.5); });
  (function animate(){
    requestAnimationFrame(animate);
    shapes.forEach(m=>{ m.rotation.x+=0.0015*m.userData.speed*10*0.1; m.rotation.y+=0.002*m.userData.speed*10*0.1; });
    group.rotation.y+=(mouseX*.4-group.rotation.y)*.02;
    group.rotation.x+=(mouseY*.2-group.rotation.x)*.02;
    renderer.render(scene,camera);
  })();
  window.addEventListener('resize',()=>{ renderer.setSize(window.innerWidth,window.innerHeight); camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); });
})();

/* ============ Cursor glow ============ */
(function(){
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  window.addEventListener('mousemove', e=>{ glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px'; });
})();

/* ============ Scroll progress bar ============ */
(function(){
  const bar = document.createElement('div');
  bar.id = 'scrollbar';
  document.body.appendChild(bar);
  window.addEventListener('scroll', ()=>{
    const h = document.documentElement;
    bar.style.transform = `scaleX(${h.scrollTop/(h.scrollHeight-h.clientHeight)})`;
  }, {passive:true});
})();

/* ============ Ripple on buttons ============ */
function addRippleToEl(el){
  if(el._ripple) return;
  el._ripple = true;
  el.addEventListener('pointerdown', e=>{
    const r = el.getBoundingClientRect();
    const span = document.createElement('span');
    span.className = 'ripple-circle';
    span.style.left = (e.clientX - r.left) + 'px';
    span.style.top  = (e.clientY - r.top)  + 'px';
    el.appendChild(span);
    span.addEventListener('animationend', ()=> span.remove());
  });
}
function attachRipples(root){
  (root||document).querySelectorAll('.btn,.tool-btn,.quran-tab,.play-btn,.mark-dot').forEach(addRippleToEl);
}
document.addEventListener('DOMContentLoaded', ()=> attachRipples());
new MutationObserver(muts=>{
  muts.forEach(m=> m.addedNodes.forEach(n=>{ if(n.querySelectorAll){ attachRipples(n); addRippleToEl(n); } }));
}).observe(document.documentElement, {childList:true, subtree:true});

/* ============ 3D Tilt on cards ============ */
function attachTilt(root){
  (root||document).querySelectorAll('.card:not([data-tilt])').forEach(card=>{
    card.setAttribute('data-tilt','1');
    card.addEventListener('mousemove', e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5;
      const y = (e.clientY-r.top)/r.height-.5;
      card.style.transform = `perspective(900px) rotateY(${x*12}deg) rotateX(${-y*12}deg) translateY(-8px) scale(1.015)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform=''; });
    card.addEventListener('touchstart', ()=>{ card.classList.add('touch-press'); }, {passive:true});
    card.addEventListener('touchend', ()=>{ card.classList.remove('touch-press'); setTimeout(()=>card.classList.remove('touch-press'),300); });
  });
}
document.addEventListener('DOMContentLoaded', ()=> attachTilt());
new MutationObserver(muts=>{
  muts.forEach(m=> m.addedNodes.forEach(n=>{ if(n.querySelectorAll) attachTilt(n); }));
}).observe(document.documentElement, {childList:true, subtree:true});

/* ============ Reveal on scroll (for static .reveal elements) ============ */
(function(){
  function observe(el){
    if(!el || el._obs) return;
    el._obs = true;
    if('IntersectionObserver' in window){
      const obs = new IntersectionObserver(entries=>{
        entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
      },{threshold:0.1});
      obs.observe(el);
    } else { el.classList.add('in'); }
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.reveal,.reveal-scale').forEach(observe);
  });
  new MutationObserver(muts=>{
    muts.forEach(m=> m.addedNodes.forEach(n=>{ if(n.classList && (n.classList.contains('reveal')||n.classList.contains('reveal-scale'))) observe(n); if(n.querySelectorAll) n.querySelectorAll('.reveal,.reveal-scale').forEach(observe); }));
  }).observe(document.documentElement,{childList:true,subtree:true});
})();

/* ============ Counter animation for stats ============ */
(function(){
  function animateCounter(el){
    if(el._counted) return;
    el._counted = true;
    const target = parseInt(el.getAttribute('data-count'), 10);
    if(!target) return;
    const duration = 1800;
    const start = performance.now();
    function update(now){
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      el.textContent = Math.round(eased * target).toLocaleString();
      if(progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function checkCounters(){
    document.querySelectorAll('[data-count]').forEach(el=>{
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight * 0.9) animateCounter(el);
    });
  }

  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting) animateCounter(e.target); });
    }, {threshold:0.3});
    document.addEventListener('DOMContentLoaded', ()=>{
      document.querySelectorAll('[data-count]').forEach(el=> obs.observe(el));
    });
  } else {
    document.addEventListener('DOMContentLoaded', ()=> window.addEventListener('scroll', checkCounters, {passive:true}));
  }
})();

/* ============ Auto-show all anim-cards after 2s (mobile fallback) ============ */
setTimeout(()=>{
  document.querySelectorAll('.anim-card:not(.vis):not(.in)').forEach(el=>{
    el.classList.add('vis');
    el.classList.add('in');
  });
}, 2000);
