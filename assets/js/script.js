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


// Change content of places page via for loop function

function showInfo(index) {
    const infoSections = document.getElementsByClassName("info")
    for (i = 0; i < infoSections.length; i++) {
        infoSections[i].style.display = "none";
    }
    infoSections[index].style.display = "flex";
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
    });

    var markerString = '<div id="content">' + 
                     '<div id="contentHeader">' + 
                     '<h3 class="contentTitle">The Sanctuary of Truth | Pattaya</h3>' + 
                     '</div>' +
                     '<div id="mainContent">' +
                     '<p>Just a few hours drive or taxi from <b>Bangkok</b> this is by far the most recommended location to visit' + 
                     'if you are looking for amazing archtiecture. This temple is carved from various types of wood such as <b>Teak</b>' +
                     '<b>Mai Deang</b>, <b>Mai Takien</b> and <b>Mai Panchaat</b>. This is all hand carved and there is not one inch of the' + 
                     'temple which has not been carved and detailed. Building started in 1981 and still ongoing, the wood is replaced once it' +
                     'gets weathered and damaged over time. It is continupusly replensihed and you can see the carving on site and even join in. </p>' +
                     '<p>See website for more details : <a href="http://www.bangkok.com/pattaya/attractions/the-sanctuary.htm" target="_blank">Sanctuary of Truth</a></p>' +
                     '</div>' + 
                     '</div>';

   

    const infowindow = new google.maps.InfoWindow({
        content: markerString,
    });

    const markers = new google.maps.Marker({
        position: {
            lat: 12.9727,
            lng: 100.889
        },
        content: markerString,
        map,
        title: "Sanctuary of Truth",
    });

    markers.addListener("click", () => {
        infowindow.open({
            anchor: markers,
            map,
            shouldFocus: false,
        });
    });
};