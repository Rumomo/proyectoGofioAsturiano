document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    // Muestra u oculta la flecha según la posición del scroll.
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Vuelve al principio de la página cuando se hace clic en la flecha.
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
