//
window.addEventListener("DOMContentLoaded", function ()
{
    const menuElements = document.querySelectorAll('nav ul li a');

    menuElements.forEach(menuElement =>
    {
        menuElement.addEventListener('click', (event) =>
        {
            // Remove bottom-border from all links
            menuElements.forEach(menuElement => menuElement.style.borderBottom = 'none');

            // Add bottom-border to the clicked link
            event.target.style.borderBottom = '4px solid black';
        });
    });
})