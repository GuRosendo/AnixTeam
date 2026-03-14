const scrollTop = document.querySelector("#scroll-top");

document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('data-section');
        const section = document.getElementById(sectionId);

        if(section){
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

             if(menuHamburguer.classList.contains("opened")){
                menuHamburguerLine.classList.remove("opened");
                menuOpaqueBackground.classList.remove("opened");
                menuHamburguer.classList.remove("opened");

                return;
            }
        }
    });
});

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})