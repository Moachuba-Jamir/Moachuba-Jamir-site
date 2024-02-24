const loader =  document.getElementById('loading')

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        loader.style.display ="none";
    }, 110);
});

// setting up loading animations on multiple devices
window.onload = function() {
    var img = document.getElementById('loadingImg')
    var desktopGif = 'assets/loading.gif';
    var mobileGif = 'assets/m.gif';

        function loadGif(){
            if(window.innerWidth <= 600){
                img.src = mobileGif;
            }
            else{
                img.src = desktopGif;
            }
        }
    loadGif();
    window.onresize = function(){
        loadGif();
    }
};


// scrollintoview 
function viewEl(el){
    var item = document.getElementById(el);
        item.scrollIntoView({behavior:'smooth', block:'end', inline: 'center'});
        item = null;
}

// scroll animation 
AOS.init({
    // Global settings:
    disable: false,
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, 
    delay: 0,
    duration: 400, 
    easing: 'ease-in-out', 
    once: false, 
    mirror: true, 
    anchorPlacement: 'top-bottom',
  
  });