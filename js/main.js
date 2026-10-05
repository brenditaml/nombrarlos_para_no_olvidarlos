const nav=document.querySelector('.navbar');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40));
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const form=document.querySelector('.needs-validation');
if(form){form.addEventListener('submit',e=>{e.preventDefault();form.classList.add('was-validated');
if(form.checkValidity()){form.reset();form.classList.remove('was-validated');document.getElementById('ok').classList.remove('d-none')}})}
const cont=document.querySelector('.contador');
if(cont){const meta=+cont.dataset.meta;const co=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;co.disconnect();const t0=performance.now();const paso=t=>{const p=Math.min((t-t0)/1800,1);cont.textContent=Math.round(meta*p).toLocaleString('es-MX');if(p<1)requestAnimationFrame(paso)};requestAnimationFrame(paso)});co.observe(cont)}
