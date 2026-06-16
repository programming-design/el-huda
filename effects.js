/* ================================================================
   effects.js — 3D bg, ripple, tilt, scroll reveal, counters
   ================================================================ */

/* ── 3D Background (Three.js) ── */
(function(){
  if(typeof THREE==='undefined') return;
  const canvas=document.getElementById('bg3d');
  if(!canvas) return;
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.setSize(innerWidth,innerHeight);
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(45,innerWidth/innerHeight,.1,100);
  camera.position.z=9;
  scene.add(new THREE.AmbientLight(0x8fae9c,1.2));
  const pt=new THREE.PointLight(0xd4af6a,2,50);
  pt.position.set(5,5,8); scene.add(pt);
  const grp=new THREE.Group(); scene.add(grp);
  const gm=new THREE.MeshStandardMaterial({color:0xd4af6a,metalness:.6,roughness:.3,wireframe:true,transparent:true,opacity:.45});
  const mm=new THREE.MeshStandardMaterial({color:0x4f8a6f,metalness:.4,roughness:.5,wireframe:true,transparent:true,opacity:.32});
  const shapes=[];
  [new THREE.IcosahedronGeometry(1.4,0),new THREE.OctahedronGeometry(1.1,0),
   new THREE.TorusGeometry(1.2,.18,8,24),new THREE.IcosahedronGeometry(.8,0)].forEach((geo,i)=>{
    const m=new THREE.Mesh(geo,i%2===0?gm:mm);
    m.position.set((i-1.5)*3+(Math.random()-.5),(Math.random()-.5)*3,(Math.random()-.5)*3);
    m.userData.s=.15+Math.random()*.25; grp.add(m); shapes.push(m);
  });
  let mx=0,my=0;
  window.addEventListener('mousemove',e=>{mx=(e.clientX/innerWidth-.5);my=(e.clientY/innerHeight-.5);});
  (function tick(){
    requestAnimationFrame(tick);
    shapes.forEach(m=>{m.rotation.x+=.0015*m.userData.s; m.rotation.y+=.002*m.userData.s;});
    grp.rotation.y+=(mx*.4-grp.rotation.y)*.02;
    grp.rotation.x+=(my*.2-grp.rotation.x)*.02;
    renderer.render(scene,camera);
  })();
  window.addEventListener('resize',()=>{renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();});
})();

/* ── Cursor glow (desktop only) ── */
if(window.matchMedia('(hover:hover)').matches){
  const g=document.createElement('div');
  g.className='cursor-glow';
  document.body.appendChild(g);
  window.addEventListener('mousemove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';},{passive:true});
}

/* ── Scroll progress bar ── */
const bar=document.createElement('div');
bar.id='scrollbar';
document.body.appendChild(bar);
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  const pct=h.scrollTop/(h.scrollHeight-h.clientHeight)||0;
  bar.style.transform=`scaleX(${pct})`;
},{passive:true});

/* ── Ripple on buttons ── */
function addRipple(el){
  if(el._ripple) return; el._ripple=true;
  el.addEventListener('pointerdown',e=>{
    const r=el.getBoundingClientRect();
    const s=document.createElement('span');
    s.className='ripple-circle';
    s.style.left=(e.clientX-r.left)+'px';
    s.style.top=(e.clientY-r.top)+'px';
    el.appendChild(s);
    s.addEventListener('animationend',()=>s.remove());
  });
}
function attachRipples(root){
  (root||document).querySelectorAll('.btn,.tool-btn,.quran-tab,.play-btn').forEach(addRipple);
}
document.addEventListener('DOMContentLoaded',()=>attachRipples());
new MutationObserver(muts=>{
  muts.forEach(m=>m.addedNodes.forEach(n=>{ if(n.querySelectorAll) attachRipples(n); }));
}).observe(document.documentElement,{childList:true,subtree:true});

/* ── 3D tilt on cards (desktop) ── */
if(window.matchMedia('(hover:hover)').matches){
  function attachTilt(root){
    (root||document).querySelectorAll('.card:not([data-tilt]),.lp-feature:not([data-tilt])').forEach(card=>{
      card.setAttribute('data-tilt','1');
      card.addEventListener('mousemove',e=>{
        const r=card.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5;
        const y=(e.clientY-r.top)/r.height-.5;
        card.style.transform=`perspective(900px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-6px) scale(1.012)`;
      });
      card.addEventListener('mouseleave',()=>{card.style.transform='';});
    });
  }
  document.addEventListener('DOMContentLoaded',()=>attachTilt());
  new MutationObserver(muts=>{
    muts.forEach(m=>m.addedNodes.forEach(n=>{ if(n.querySelectorAll) attachTilt(n); }));
  }).observe(document.documentElement,{childList:true,subtree:true});
}

/* ── Scroll reveal for static .reveal elements ── */
(function(){
  function reveal(el){
    if(el._obs) return; el._obs=true;
    if('IntersectionObserver' in window){
      const obs=new IntersectionObserver(entries=>{
        entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);} });
      },{threshold:.1,rootMargin:'0px 0px -20px 0px'});
      obs.observe(el);
    } else { el.classList.add('in'); }
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.reveal,.reveal-scale').forEach(reveal);
  });
  new MutationObserver(muts=>{
    muts.forEach(m=>m.addedNodes.forEach(n=>{
      if(!n.querySelectorAll) return;
      if(n.classList&&(n.classList.contains('reveal')||n.classList.contains('reveal-scale'))) reveal(n);
      n.querySelectorAll('.reveal,.reveal-scale').forEach(reveal);
    }));
  }).observe(document.documentElement,{childList:true,subtree:true});
})();

/* ── Counter animation ── */
(function(){
  function countUp(el){
    if(el._counted) return; el._counted=true;
    const target=parseInt(el.getAttribute('data-count'),10);
    if(!target){ el.textContent=target; return; }
    const dur=1600, start=performance.now();
    function frame(now){
      const p=Math.min((now-start)/dur,1);
      const eased=1-Math.pow(1-p,3);
      el.textContent=Math.round(eased*target).toLocaleString();
      if(p<1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  if('IntersectionObserver' in window){
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting) countUp(e.target); });
    },{threshold:.3});
    document.addEventListener('DOMContentLoaded',()=>{
      document.querySelectorAll('[data-count]').forEach(el=>obs.observe(el));
    });
  }
})();

/* ── Fallback: show all hidden anim-cards after 1.5s ── */
setTimeout(()=>{
  document.querySelectorAll('.anim-card:not(.in):not(.vis)').forEach(el=>{
    el.classList.add('in');
  });
},1500);
