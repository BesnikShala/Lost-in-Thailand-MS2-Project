// change navbar background

function activeNav () {
    let navbar = document.getElementById('navbarNav');
    let scrollValue = window.scrollY;

    if(scrollValue < 350) {
        navbar.classList.remove('active-nav')
    }  else {
        navbar.classList.add('active-nav')
    }
}

window.addEventListener('scroll', activeNav);


// Change content of places page via hide/show function

// function showInfo(ab) {
//     if(ab == 0){
//         document.getElementsByClassName('info')[0].style.display="block";
//         document.getElementsByClassName('info')[1].style.display = "none";
//         document.getElementsByClassName('info')[2].style.display = "none";
        
//     }
//     if (ab == 1){
//         document.getElementsByClassName('info')[0].style.display = "none";
//         document.getElementsByClassName('info')[1].style.display = "block";
//         document.getElementsByClassName('info')[2].style.display = "none";
//     }
//      if (ab == 2) {
//          document.getElementsByClassName('info')[0].style.display = "none";
//          document.getElementsByClassName('info')[1].style.display = "none";
//          document.getElementsByClassName('info')[2].style.display = "block";
//      }
// }

function showInfo(index) {
    const infoSections = document.getElementsByClassName("info")
    for (i = 0; i < infoSections.length; i++) {
        infoSections[i].style.display = "none";
    }
    infoSections[index].style.display = "block";
};

// Google maps function

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 13.7563,
            lng: 100.5018
        }
    });

    const marker = new google.maps.Marker({
        position: 
        {
            lat: 13.7563,
            lng: 100.5018
        },
        map: map
    })
}