document.addEventListener("DOMContentLoaded", function(){
    let menuToggle = document.querySelector("div.menu-toggle");
    let navMenu = document.querySelector("#nav-menu");

    menuToggle.addEventListener('click', function(){
        menuToggle.classList.toggle('active');
        document.body.classList.toggle('active');
        navMenu.classList.toggle('active');
    })
})
