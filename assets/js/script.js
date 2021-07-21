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
    
    const templeIcon = "http://maps.google.com/mapfiles/kml/shapes/church.png"

    const beachIcon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"

    var markers = [
        {
         coords: {
            lat: 12.9727, 
            lng: 100.889
        },
         content: '<div id="content">' +
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
             '</div>',
             iconImage: templeIcon,
        },
        {
        coords: {
            lat: 13.7516,
            lng: 100.4927
        },
            content: '<div id="content">' +
            '<div id="contentHeader">' +
            '<h3 class="contentTitle">The Emerald Buddha | Bangkok</h3>' +
            '</div>' +
            '<div id="mainContent">' +
            '<p>Officially called Wat Phra Kaew, this temple is located in <b>Bangkok</b> and is regarded as the most sacred buddhist temples.' +
            'The temple is located within the Grand Palace which holds many historic buildings within. The statue is 66 centimeters tall and' +
            ' made of a stone called <b>Jasper</b> it is green which has given it the name of Emerald Buddah. The statue is also clothed in <b>gold</b>' +
            'which changes during the seasons. This is truly amazing to see and is also recommended to go and see, the statue is dated back to 1434' +
            'and is a real thai tresure. It is used for ceremonies up to three times a year.</p>' +
            '<p>See website for more details : <a href="https://www.buddhistdoor.net/features/tales-of-the-emerald-buddha-simplicity-and-splendor" target="_blank">The emerald Buddha</a></p>' +
            '</div>' +
            '</div>',
            iconImage: templeIcon,
        },
        {
        coords: {
                lat: 13.7437,
                lng: 100.4889
            },
            content: '<div id="content">' +
            '<div id="contentHeader">' +
            '<h3 class="contentTitle">Temple of Dawn | Bangkok</h3>' +
            '</div>' +
            '<div id="mainContent">' +
            '<p>Officially called Wat Arun, this temple is also located in <b>Bangkok</b> on the banks of the Chao Phraya River.' +
            'The temple is dedicated to the hindu god Aruna, the recommended time to see this is during sun rise or sun set as the light reflects from the' +
            ' temple wals. The temple has a 70 meter spire which is one of Bangkoks most famous landmarks. We recommend visiting this temple via a water taxi' +
            ' which can be taken from various points along the river banks. You can also climb to the top of the temple spire via very steep stairs which gives' +
            ' a very rewarding view of the Chao Phraya River.</p>' +
            '<p>See website for more details : <a href="https://uk.hotels.com/go/thailand/wat-arun" target="_blank">The Temple of Dawn</a></p>' +
            '</div>' +
            '</div>',
            iconImage: templeIcon,
        },
        {
            coords: {
                lat: 13.7667,
                lng: 100.5141
            },
            content: '<div id="content">' +
                '<div id="contentHeader">' +
                '<h3 class="contentTitle">The Marble Temple | Bangkok</h3>' +
                '</div>' +
                '<div id="mainContent">' +
                '<p>Officially called Wat Benjamabhopit, this temple is also located in <b>Bangkok</b> not too far from the Grand Palace.' +
                'The temple is well known and has earned the nickname of the Marble Temple as the exterior walls are covered in marble imported from Italy' +
                ' The temple is recommended for a visit as it is a very significant temple to thailand and appears on the thai currency. It was built in early 1900s ' +
                'by King Rama V and is regarded as one of the most important royal temples as itt houses the ashes of the king himself.' +
                ' </p>' +
                '<p>See website for more details : <a href="https://en.wikipedia.org/wiki/Wat_Benchamabophit" target="_blank">The Marble Temple</a></p>' +
                '</div>' +
                '</div>',
            iconImage: templeIcon,
        },
        {
            coords: {
                lat: 13.7627,
                lng: 100.5027
            },
            content: '<div id="content">' +
                '<div id="contentHeader">' +
                '<h3 class="contentTitle">Wat Intharawihan | Bangkok</h3>' +
                '</div>' +
                '<div id="mainContent">' +
                '<p>This temple is also located in <b>Bangkok</b> in the Phra Nakhon district. It is known for the 105 ft buddha statue which is must see' +
                ' site. The temple is easily accessible via the river with a water taxi on the same river as the Wat Arun temple. We recommend this way of visiting' +
                ' the temple as you get to see the best view of the statue from a far distance. As you gte close you begin to realise how big the statue is truly.</p>' +
                '<p>See website for more details : <a href="https://en.wikipedia.org/wiki/Wat_Benchamabophit" target="_blank">The Marble Temple</a></p>' +
                '</div>' +
                '</div>',
            iconImage: templeIcon,
        },
        {
            coords: {
                lat: 7.8760,
                lng: 98.2762
            }, 
            content: '<div id="content">' +
                '<div id="contentHeader">' +
                '<h3 class="contentTitle"> Freedom Beach | Phuket</h3>' +
                '</div>' +
                '<div id="mainContent">' +
                '<p>Freedom Beach is located on the central east coast of Phuket. It has 300 meters of the finest white sand beach, this little paradise' +
                ' is highly recommended but is tricky to get to. The trip is worth it however, you will either need to take the traditional fishtail boat or ' +
                ' you can navigate the steep footpath through the mountainous terrain. The beach is not very commercial so if you want a getaway and peacful ' +
                'taste of paradise we highly recommend this beach.</p>' +
                '<p>See website for more details : <a href="https://www.phuket101.net/freedom-beach/" target="_blank">Freedom Beach</a></p>' +
                '</div>' +
                '</div>',
            iconImage: beachIcon,
        },
        {
            coords: {
                lat: 7.8491,
                lng: 98.2930
            }, 
            content: '<div id="content">' +
                '<div id="contentHeader">' +
                '<h3 class="contentTitle"> Karon Beach | Phuket</h3>' + 
                '</div>' +
                '<div id="mainContent">' +
                '<p>Karon Beach is located on the central east coast of Phuket. It has 300 meters of the finest white sand beach, this little paradise' +
                ' is highly recommended but is tricky to get to. The trip is worth it however, you will either need to take the traditional fishtail boat or ' +
                ' you can navigate the steep footpath through the mountainous terrain. The beach is not very commercial so if you want a getaway and peacful ' +
                'taste of paradise we highly recommend this beach.</p>' +
                '<p>See website for more details : <a href="https://www.phuket101.net/freedom-beach/" target="_blank">Freedom Beach</a></p>' +
                '</div>' +
                '</div>',
            iconImage: beachIcon,
        },
        {
            coords: {
                lat: 7.8170, 
                lng: 98.7956
            },
            content: '<div id="content">' +
                '<div id="contentHeader">' +
                '<h3 class="contentTitle"> Bamboo Island | Krabi</h3>' +
                '</div>' +
                '<div id="mainContent">' +
                '<p>Bamboo Island is one of our favorite destinations as it is a very remote island inbetween Krabi and <b>Phi Phi Islands</b> this means' +
                ' you will need to take either a fishtale boat or speed boat which is available from the Krabi local tours or online. We recommend the speed boat' +
                ' as travelling in the traditional fish tale boat can be uncomfortable on long journies. The Island is remote but houses crystal clear blue water' +
                'it has limitted refrreshments on shore so we recommend taking extra drinks and food with you. This beach getaway offers a true escape from the busy ' +
                'tourist flooded beaches and offers your own island which you can roam and find a spot that suits you.</p>' +
                '<p>See website for more details : <a href="https://simbaseatrips.com/bamboo-island-thailand/" target="_blank">Bamboo Island</a></p>' +
                '</div>' +
                '</div>',
            iconImage: beachIcon,
        }
    ];

    for (var i = 0; 1 < markers.length; i++) {
        myMarker(markers[i]);
    }

    function myMarker(mark) {
        let marker = new google.maps.Marker({
            position: mark.coords,
            map: map,
        });

        if (mark.iconImage) {
            marker.setIcon(mark.iconImage);
        }

        if (mark.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: mark.content,
            });
        }

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    }

};