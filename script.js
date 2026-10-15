const themeButton=document.querySelector('#theme');
themeButton.addEventListener('click',()=>{const isDark=document.body.classList.toggle('dark');themeButton.setAttribute('aria-pressed',String(isDark));themeButton.textContent=isDark?'☀️ Light mode':'🌙 Dark mode';});
document.querySelectorAll('.scene').forEach(card=>{const button=card.querySelector('.flipbtn');button.addEventListener('click',()=>{const flipped=card.classList.toggle('flipped');button.setAttribute('aria-pressed',String(flipped));button.textContent=flipped?'Буцааж эргүүлэх ↶':'Карт эргүүлэх ↻';});});
