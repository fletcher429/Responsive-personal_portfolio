let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Now, let's call the reveal function for the sections we want to animate.
// We'll adjust parameters as needed for each section.

ScrollReveal().reveal('.project-item', { origin: 'bottom', distance: '20px', duration: 1000, delay: 400 });

ScrollReveal().reveal('.edit-item', { origin: 'bottom', distance: '20px', duration: 1000, delay: 400 });

const typed = new Typed('.multiple-text',{
    strings:['Video Editor',''],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function startCounter(targetId, finalValue, duration) {
    let current = 0;
    const increment = finalValue / duration;
    const targetElement = document.getElementById(targetId);
    
    const counterInterval = setInterval(() => {
        current += increment;
        targetElement.textContent = Math.ceil(current);
        if (current >= finalValue) {
            clearInterval(counterInterval);
            targetElement.textContent = finalValue;
        }
    }, 50); // Adjust interval for desired speed
}

startCounter("projectsCounter", 34, 25); // 1000ms = 1 second
startCounter("clientsCounter", 4, 100); // 1000ms = 1 second
document.addEventListener("DOMContentLoaded", function() {
    // Select the projects-done section
    const projectsDone = document.getElementById("projectsDone");

    // Fade in from the right animation
    projectsDone.style.display = "block"; // Display the element
    projectsDone.style.opacity = 1; // Set opacity to 1
    projectsDone.style.transform = "translateX(0)"; // Move element to original position
});
// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const recentEditsSection = document.querySelector('.recent-edits');
    const longItems = document.querySelectorAll('.long-item');

    // Check if recent-edits section is in viewport
    if (isInViewport(recentEditsSection)) {
        // Trigger animations for each long item
        longItems.forEach((item, index) => {
            if (index % 2 === 0) {
                item.style.animation = 'slideFromRight 1s ease forwards';
            } else {
                item.style.animation = 'slideFromLeft 1s ease forwards';
            }
        });

        // Remove scroll event listener after triggering animations
        window.removeEventListener('scroll', handleScroll);
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
