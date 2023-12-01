function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('active');
}

document.addEventListener('click', function (event) {
    const navbarMenu = document.querySelector('.navbar-menu');
    const menuBtn = document.querySelector('.menu-icon');

    if (event.target !== navbarMenu && event.target !== menuBtn) {
        navbarMenu.classList.remove('active');
    }
});

const navmenu = document.querySelector('.navbar-menu');
const menuBtn = document.querySelector('.menu-icon');

function handleResize() {
    if (window.innerWidth > 899) {
        navmenu.style.display = 'none';
        menuBtn.style.display = 'none';
    } else {
        menuBtn.style.display = 'block';
        navmenu.style.display.add = 'block';

    }
}

// Initial call to handleResize to set the initial state
handleResize();

// Add event listener to handle resize events
window.addEventListener('resize', handleResize);
