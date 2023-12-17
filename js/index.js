window.addEventListener('scroll', function (e) {

    const elFigureImg = document.querySelectorAll('.img-list img'),
        elAside = document.querySelector('aside')
    // console.log("Top :", elFigureImg[4].offsetTop, " page :", window.pageYOffset)
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