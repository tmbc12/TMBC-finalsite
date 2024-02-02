// script.js

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Animation for the first heading
    gsap.from(".hero_heading", {
        duration: 0.7,
        delay: 4,
        ease: "power1.out",
        x: -100, // Example animation, you can change according to your need
        opacity: 0,
        stagger: 0.02
    });

    // Animation for the second heading
    gsap.from(".btn-text_small2", {
        duration: 0.8,
        delay: 5.1,
        ease: "power1.out",
        y: 100, // Example animation, you can change according to your need
        opacity: 0,
        stagger: 0.02
    });

    
});

