window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function calculateLimit() {
    const expression = document.getElementById('expression').value;
    const variable = document.getElementById('variable').value;
    const approach = parseFloat(document.getElementById('approach').value);

    try {
        // Membuat scope untuk menyimpan variabel
        const scope = {};
        scope[variable] = approach;

        // Menghitung nilai limit
        const result = math.evaluate(expression, scope);

        document.getElementById('result').innerHTML = `${result}`;
    } catch (error) {
        console.error(error);
        document.getElementById('result').innerHTML = 'Invalid input or kalkulator';
    }
}
