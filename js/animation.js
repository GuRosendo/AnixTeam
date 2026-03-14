const elements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            setTimeout(() => {
                entry.target.classList.add("show");
            }, 300);

            observer.unobserve(entry.target);

        }

    });

},{
    threshold: 0.15
});

elements.forEach(el => observer.observe(el));