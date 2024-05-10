document.addEventListener('DOMContentLoaded',function()
{
    const navLink = document.querySelectorAll('.nav-link');

    navLink.forEach(function(link)
    {
         link.addEventListener('click',function(event)
        {

            navLink.forEach(function(link)
            {
               link.classList.remove('active');  
            });
            link.classList.add('active');

             // If the clicked link is the 'Categories' link, scroll to the 'Shop By Category' section
             if (link.querySelector('.nav-name').textContent === 'Categories') {
                const shopByCategorySection = document.getElementById('shop-by-category');
                shopByCategorySection.scrollIntoView({ behavior: 'smooth' });
            }
            
        });
    });
});


