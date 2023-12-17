const elBuger = document.querySelector('.toggle img'),
    elBugerNav = document.querySelector('.toggle nav'),
    elClose = document.querySelector('.close'),
    elBody = document.querySelector('body'),
    elHeaderImg = document.querySelector('.head-mobile div img'),
    elSignUp = document.querySelector('.signup'),
    elSignIn = document.querySelector('.signin'),
    elLanguage = document.querySelector('.language'),
    elCMypage = document.querySelector('.mypage'),
    elSearch = document.querySelector('.search'),
    elTitle = document.querySelector('.p-title'),
    elInSearch = document.querySelector('.in-search'),
    elSearchText = document.querySelector('.searchText'),
    elSearchBtn = document.querySelector('.searchBtn');

window.onscroll = function (e) {
    let setTime;
    let status = { y: 0, dy: 0, state: true };
    let scrollTop = e.pageYOffset;

    status.y = scrollTop;
    status.state = (status.dy < status.y) ? true : false;
    status.dy = status.y;

    clearTimeout(setTime);
    setTime = setTimeout(function () {
    }, 50);
}


const toastMsg = (t) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "warning",
        title: t
    });
}

elBuger.onclick = function (e) {
    e.preventDefault();
    elBuger.classList.toggle('active');
    elBugerNav.classList.toggle('active');
    elTitle.style = "display:block;";
    elInSearch.style = "display:none;";
    elHeaderImg.style.cssText = "pointer-events:none";
    elBody.style.cssText = "overflow:hidden";
}
elClose.onclick = function (e) {
    e.preventDefault();
    elBugerNav.classList.toggle('active');
    elHeaderImg.style.cssText = "pointer-events:auto";
    elBody.style.cssText = "overflow:auto";
}

elSearch.onclick = function (e) {
    e.preventDefault();
    elTitle.style = "display:none;";
    elInSearch.style = "display:block;";
    elSearchText.value = "";
    elSearchText.focus();
}

elSignIn.onclick = function (e) {
    e.preventDefault();
    toastMsg('Coming soon...');
}

elSignUp.onclick = function (e) {
    e.preventDefault();
    toastMsg('Coming soon...');
}

elLanguage.onclick = function (e) {
    e.preventDefault();
    toastMsg('Coming soon...');
}

elCMypage.onclick = function (e) {
    e.preventDefault();
    toastMsg('Please sign in...');
}
