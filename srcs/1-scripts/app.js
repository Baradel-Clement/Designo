// Navbar start

const menuBtn = document.querySelector('.menu-btn');
const navBlock = document.querySelector('.mobile-nav-block');
const mobileNavList = document.querySelector('.mobile-nav-list');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navBlock.classList.toggle('active');
    mobileNavList.classList.toggle('active');

});

//Navbar end 

// Designs cards

const designCards = document.querySelectorAll('.design-card');

designCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
        card.lastElementChild.classList.add('active')
        card.lastElementChild.lastElementChild.classList.remove('black')
        card.lastElementChild.firstElementChild.classList.remove('peach')
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('active');
        card.lastElementChild.classList.remove('active')
        card.lastElementChild.lastElementChild.classList.add('black')
        card.lastElementChild.firstElementChild.classList.add('peach')
    })
})