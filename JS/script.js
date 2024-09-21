//   toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick= ( ) =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

    
    
    
};
window.onscroll= () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Revel
ScrollReveal({ 
    reset: true ,
    distance:"80px",
    duration: 2000,
    delay:200

});

ScrollReveal().reveal('.home-content , .heading', { origin: "top" });

ScrollReveal().reveal('.home-img , services-contanier, portfolio-box, .contact-form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });


// types js
const typed = new Typed('.multiple-text', {
    strings: ['Fronted Developer!' , 'Graphic Designer!', 'Online Tutor!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

// to read more
const toggleButton = document.getElementById('toggleButton');
const skillDiv = document.getElementById('skills');

if(toggleButton && skillDiv){
    toggleButton.addEventListener('click', () => {
       if( skillDiv.style.display === 'none' ){
        skillDiv.style.display = 'block';
        toggleButton.value = 'Hide'
    }else{
        skillDiv.style.display = 'none';
        toggleButton.value = 'Show ';
    }
      
    })
}else {
    console.log('Required element not found in the DOM!!');
    
}