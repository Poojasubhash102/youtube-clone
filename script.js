document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.contianer');

    menuIcon.addEventListener('click', function() {
        sidebar.classList.toggle('small-sidebar');
        container.classList.toggle('large-contianer');
    });
});
