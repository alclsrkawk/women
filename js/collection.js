window.addEventListener('scroll', function (e) {

    const elFigureImg = document.querySelectorAll('article figure img'),
        elAside = document.querySelector('aside');

    if (elFigureImg[1].getBoundingClientRect().top < 0) {
        elAside.classList.add('active');
    }
    else {
        elAside.classList.remove('active')
    }
    elAside.onclick = function () {
        window.scrollTo({
            top: 0, left: 0, behavior: 'smooth'
        })
    }

});