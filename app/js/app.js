document.addEventListener("DOMContentLoaded", function(){
        
    // Toggle mobile menu
    let menuToggle = document.querySelector("div.menu-toggle");
    let navMenu = document.querySelector("#nav-menu");
    
    if(menuToggle){
        menuToggle.addEventListener('click', function(){
            menuToggle.classList.toggle('active');
            document.body.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Only in sign-in.html
    // Checkes input when user click on a 'keep me logged in' section
    let keepLogin = document.querySelector('section.keep-login');
    
    if(keepLogin){
        let checkbox = keepLogin.children[0];
        
        keepLogin.addEventListener('click', function(){
            checkbox.checked ? checkbox.checked = false : checkbox.checked = true;
        });
    }
    
    // Only in index.html
    let sliderNewest = document.querySelector('section.slider.newest-books');
    let sliderRated = document.querySelector('section.slider.rated-books');
    
    if(sliderNewest && sliderRated){
        function checkWidth(slider){
            let bookcoversHidden = slider.children[1];
            let bookcovers = slider.children[2];
            
            // The condition max-width
            if(window.matchMedia("(max-width: 651px)").matches){
                bookcoversHidden.prepend(bookcovers.children[4]);
            }

            if(window.matchMedia("(max-width: 501px)").matches){
                bookcoversHidden.prepend(bookcovers.children[3]);
            }

            if(window.matchMedia("(max-width: 426px)").matches){
                bookcoversHidden.prepend(bookcovers.children[2]);
                bookcoversHidden.prepend(bookcovers.children[1]);
            }
        }
        checkWidth(sliderNewest);
        checkWidth(sliderRated);

        function changeSlides(slider, direction){
            let bookcoversHidden = slider.children[1];
            let bookcovers = slider.children[2];
            
            let bookcoversFirst = bookcovers.firstElementChild;
            let bookcoversLast = bookcovers.lastElementChild;
            let bookcoversHiddenFirst = bookcoversHidden.firstElementChild;
            let bookcoversHiddenLast = bookcoversHidden.lastElementChild;
            let sliderButton;
            
            if(direction == 'left'){
                 // To move to the left
                    if(bookcoversHiddenFirst){
                        bookcovers.append(bookcoversHiddenFirst)
                        bookcoversHidden.append(bookcoversFirst)
                    }else{
                        bookcovers.appendChild(bookcoversFirst);
                    }
            }else{
                // To move to the right
                    if(bookcoversHiddenFirst){
                        bookcovers.prepend(bookcoversHiddenLast);
                        bookcoversHidden.prepend(bookcoversLast);
                    }else{
                        bookcovers.prepend(bookcoversLast)
                    }
            }

        };
        
        sliderNewest.firstElementChild.addEventListener('click', function(){ changeSlides(sliderNewest, 'left'); })
        sliderNewest.lastElementChild.addEventListener('click', function(){ changeSlides(sliderNewest, 'right'); })

        sliderRated.firstElementChild.addEventListener('click', function(){ changeSlides(sliderRated, 'left'); })
        sliderRated.lastElementChild.addEventListener('click', function(){ changeSlides(sliderRated, 'right'); })
    }
})
