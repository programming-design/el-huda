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

  // Soft lights
  scene.add(new THREE.AmbientLight(0x8fae9c, 1.2));
  const point = new THREE.PointLight(0xd4af6a, 2, 50);
  point.position.set(5,5,8);
  scene.add(point);

  const group = new THREE.Group();
  scene.add(group);

  // Geometric shapes - low-poly icosahedrons forming an arabesque-like cluster
  const goldMat = new THREE.MeshStandardMaterial({color:0xd4af6a, metalness:0.6, roughness:0.3, wireframe:true, transparent:true, opacity:0.5});
  const mintMat = new THREE.MeshStandardMaterial({color:0x4f8a6f, metalness:0.4, roughness:0.5, wireframe:true, transparent:true, opacity:0.35});

  const shapes = [];
  const geoTypes = [
    new THREE.IcosahedronGeometry(1.4, 0),
    new THREE.OctahedronGeometry(1.1, 0),
    new THREE.TorusGeometry(1.2, 0.18, 8, 24),
    new THREE.IcosahedronGeometry(0.8, 0)
  ];

  for(let i=0;i<4;i++){
    const mesh = new THREE.Mesh(geoTypes[i], i%2===0 ? goldMat : mintMat);
    mesh.position.set(
      (i - 1.5) * 3.0 + (Math.random()-0.5),
      (Math.random()-0.5) * 3,
      (Math.random()-0.5) * 3
    );
    mesh.userData.speed = 0.15 + Math.random()*0.25;
    mesh.userData.axis = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
    group.add(mesh);
    shapes.push(mesh);
  }

  group.position.x = (document.documentElement.dir === 'rtl') ? 3 : -3;

  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', (e)=>{
    mouseX = (e.clientX / window.innerWidth - 0.5);
    mouseY = (e.clientY / window.innerHeight - 0.5);
  });

  function animate(){
    requestAnimationFrame(animate);
    shapes.forEach(m=>{
      m.rotation.x += 0.0015 * m.userData.speed * 10 * 0.1;
      m.rotation.y += 0.002 * m.userData.speed * 10 * 0.1;
    });
    group.rotation.y += (mouseX*0.4 - group.rotation.y) * 0.02;
    group.rotation.x += (mouseY*0.2 - group.rotation.x) * 0.02;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
  });
})();

/* ============ Scroll reveal animations ============ */
(function(){
  const els = document.querySelectorAll('.reveal, .reveal-scale');
  if(!('IntersectionObserver' in window)){
    els.forEach(el=>el.classList.add('in'));
    return;
  }
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  els.forEach(el=>obs.observe(el));
})();

/* ============ 3D tilt on cards ============ */
(function(){
  const cards = document.querySelectorAll('.card');
  cards.forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', ()=>{
      card.style.transform = '';
    });
  });
})();

/* ============ Cursor glow ============ */
(function(){
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  window.addEventListener('mousemove', (e)=>{
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
})();

/* ============ Scroll progress bar ============ */
(function(){
  const bar = document.createElement('div');
  bar.id = 'scrollbar';
  document.body.appendChild(bar);
  window.addEventListener('scroll', ()=>{
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.transform = `scaleX(${scrolled})`;
  });
})();
