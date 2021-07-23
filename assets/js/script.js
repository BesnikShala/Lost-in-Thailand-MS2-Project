// change navbar background

function activeNav() {
    let navbar = document.getElementById('navbarScroll');
    let scrollValue = window.scrollY;

    if (scrollValue < 350) {
        navbar.classList.remove('active-nav')
    } else {
        navbar.classList.add('active-nav')
    }
}

window.addEventListener('scroll', activeNav);


// Change content of places page via for loop function

function showInfo(index) {
    const infoSections = document.getElementsByClassName("info")
    for (i = 0; i < infoSections.length; i++) {
        infoSections[i].style.display = "none";
    }
    infoSections[index].style.display = "flex";
};

