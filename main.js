var loading = document.getElementById('loading');
var main = document.querySelector('.mainContainer')
const mobile = document.getElementById('mobile');

function mobile123(){
   window.onload = ()=>{
    loading.style.display ="none";
    main.style.display = "block"
    console.log("window is in mobile");
   }
}

if(window.innerWidth < 500){
    mobile123();
} else{
    setTimeout(()=>{
        loading.style.display = "none";
        main.style.display = "block"
        console.log("window is in desktop")
    }, 300); 
}
function responsive() {
    const mobile = document.getElementById('mobile');
    const splineDesk = document.getElementById('splineDesk');
        if (window.innerWidth <= 500) {
            splineDesk.style.display = "none";
            mobile.style.display = "block";
        }    
        else {
            mobile.style.display = "none";
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://unpkg.com/@splinetool/viewer@1.0.53/build/spline-viewer.js';
            document.head.appendChild(script);
    }
}

    window.addEventListener('load', () => {
            responsive();
                window.onresize = function() {
                responsive();
            };
        });
    
        


// scrollintoview 
function viewEl(el){
    var item = document.getElementById(el);
        item.scrollIntoView({behavior:'smooth', block:'center', inline: 'center'});
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

//   for message submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var form = document.getElementById("myForm");
    var formData = new FormData(form);
    
    var isEmptyField = Array.from(formData.values()).some(value => value.trim() === '');
    if (isEmptyField) {
        alert("Please fill out all fields before submitting the form.");
        return;
    }

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => {
        if (response.ok ) {
            form.reset();
            alert("Form submitted successfully!");
        } else {
            throw new Error("Form submission failed!");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Check your internet connection Please try again later.");
    });
});