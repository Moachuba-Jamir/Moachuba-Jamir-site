
const loader =  document.getElementById('loading')

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        loader.style.display ="none";
    }, 4000);
});

// setting up loading animations on multiple devices
window.onload = function() {
    var img = document.getElementById('loadingImg')
    var desktopGif = '../../assets/loading.gif'
    var mobileGif = '../../assets/m.gif'

        function loadGif(){
            if(window.innerWidth <= 480){
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