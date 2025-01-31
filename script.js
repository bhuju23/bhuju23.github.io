//scroll function
function scrollToElementWithOffset(elementId, offset = 45) {
    const element = document.getElementById(elementId);
    if (element) {
    // Get the element's position relative to the viewport
    const elementTop = element.getBoundingClientRect().top;

    // Calculate the scroll position with the offset
    const scrollPosition = window.scrollY + elementTop - offset;

    // Scroll to the calculated position
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
} else {
    console.error(`Element with id "${elementId}" not found.`);
}
}	

function scrollToElementWithOffsetMobile(elementId, offset = 45) {
    const element = document.getElementById(elementId);
    if (element) {
    // Get the element's position relative to the viewport
    const elementTop = element.getBoundingClientRect().top;

    // Calculate the scroll position with the offset
    const scrollPosition = window.scrollY + elementTop - offset;

    // Scroll to the calculated position
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
    mainBody.classList.toggle('navPanel-visible');
    menuIconToggle.classList.toggle('toggle2');
} else {
    console.error(`Element with id "${elementId}" not found.`);
}
}


const menuIcon = document.getElementById('titleBar');
const navLinks = document.getElementById('navPanel');
const mainBody = document.getElementById('homepage');
const menuIconToggle = document.querySelector('.toggle');

// Toggle active class for sliding menu
menuIcon.addEventListener('click', () => {
    mainBody.classList.toggle('navPanel-visible');
    menuIconToggle.classList.toggle('toggle2');
});