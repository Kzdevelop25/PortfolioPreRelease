window.addEventListener("scroll", function(){
    var nav = document.querySelector(".nav-mobile-list");
    nav.classList.toggle("sticky", this.window.scrollY > 51)
})