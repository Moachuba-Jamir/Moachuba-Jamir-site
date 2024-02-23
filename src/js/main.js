
const loader =  document.getElementById('loading')

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        loader.style.display ="none";
    }, 3000);
});