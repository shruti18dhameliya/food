const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute(
        "class",
    isOpen ? "ri-close-line": "ri-menu-3-line"
    );
});

navLinks.addEventListener("click" , (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});



const sr = ScrollReveal({
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    reset: false
});

sr.reveal(".header_image .image img");
sr.reveal(".header_top", { delay: 500 });
sr.reveal(".header_content h1", { delay: 1000 });
sr.reveal(".header_content p", { delay: 1500 });
sr.reveal(".header_btns", { delay: 2000 });
sr.reveal(".header_card", { delay: 2500, interval: 500 });
sr.reveal(".header_image_footer", { delay: 4000 });

sr.reveal(".menu_card", { interval:500 });
sr.reveal(".menu_btn", { delay:1500 });

sr.reveal(".service_card", { interval:500 });


sr.reveal(".banner_image img", { origin:"right" });


sr.reveal(".banner_content .section_header", { delay:500 });

sr.reveal(".banner_content .p", { delay:1000 });
sr.reveal(".banner_btn", { delay:1500 });

sr.reveal(".customer_image img", { origin:"left" });

// const swiper = new Swiper(".swiper",{
//     loop: true,

//     navigation:{
//         nextEl: ".swiper-next",
//         prevEl: "swiper-prev"
//     },
// });


