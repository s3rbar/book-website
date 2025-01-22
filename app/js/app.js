document.addEventListener("DOMContentLoaded", function(){
    // Toggle menu code
    let menuToggle = document.querySelector("div.menu-toggle");
    let navMenu = document.querySelector("#nav-menu");

    if(menuToggle){
        menuToggle.addEventListener('click', function(){
            menuToggle.classList.toggle('active');
            document.body.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }


    // Checkes input when user click on a 'keep me logged in' section
    let keepLogin = document.querySelector('section.keep-login');
    let checkbox = keepLogin.children[0];
    
    if(keepLogin){
        keepLogin.addEventListener('click', function(){
            checkbox.checked ? checkbox.checked = false : checkbox.checked = true;
        });
    }
})
