function scrollToID(id) {
        var offersSection = document.getElementById(id);
        offersSection.scrollIntoView({ behavior: 'smooth' });
}
function toggleMenu() {
    var menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}