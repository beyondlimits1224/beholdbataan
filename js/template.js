// Visitor Counter
const VisitorCounter = () =>{
    const Eye = document.querySelector(".eye");
    const Visitor = document.querySelector(".visitor");
    const Close = document.querySelector(".visitor .close");
    
    // Events
    Eye.addEventListener("click", openVisitor);
    Close.addEventListener("click", closeVisitor);

    function openVisitor(){
        Visitor.classList.add('visitor-active');
    }

    function closeVisitor(){
        Visitor.classList.remove('visitor-active');
    }

};


VisitorCounter();

// Navmenu
const NavMenu = () =>{
    const Bar = document.querySelector("nav .bar");
    const NavMenu = document.querySelector("nav .navmenu");
    const Close = document.querySelector(".navmenu .close");


    // Events
    Bar.addEventListener("click", openMenu);
    Close.addEventListener("click", closeMenu);

    function openMenu(){
        NavMenu.classList.add('navmenu-active');
    }

    function closeMenu(){
        NavMenu.classList.remove('navmenu-active');
    }
};

NavMenu();

