

// burger menu time!
const iconBurger = document.querySelector('#btnBurger');
const itemsNav = document.querySelectorAll('.navItem');
const navList = document.getElementById('menuNav');

iconBurger.addEventListener('click', () => {
    if (navList.classList.contains('menuMove')) {
        navList.classList.add('menuMoveOut');
    };
    navList.classList.toggle('menuMove');
    setTimeout(() => {navList.classList.remove('menuMoveOut'); }, 1000);
    }
);
itemsNav.forEach((element) => element.addEventListener('click', () => {
    navList.classList.add('menuMoveOut');
    navList.classList.remove('menuMove');    
    })
);