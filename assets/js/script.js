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

    // set custom markers for the different sections    

    const templeIcon = "http://maps.google.com/mapfiles/kml/shapes/church.png"

    const beachIcon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"

    const activityIcon = "http://maps.google.com/mapfiles/kml/shapes/ranger_station.png"

    // marker points with content

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
        },
        {
        coords: {
                lat: 8.0297,
                lng: 98.8240
            },
            content: '<div id="content">' +
            '<div id="contentHeader">' +
            '<h3 class="contentTitle"> Ao Nang Beach | Krabi</h3>' +
            '</div>' +
            '<div id="mainContent">' +
            '<p>Ao Nang beach is one of the best places in Krabi for those of you seeking a mixture of tranquility and partying. Krabi is a busy seaside town which' +
            ' offers everything you need, from quality restaurants and bars to silky sand and activities. This is a good destination to visit once you have vistited the' +
            ' remote beaches and isalnds recommended so you can enjoy the amenities Krabi has to offer. The seaside is full of amazing places to eat and drink and have fun' +
            ' this is also the best destination to visit the iland tours and other areas in Thailand.</p>' +
            '<p>See website for more details : <a href="https://www.tripadvisor.co.uk/Tourism-g1507054-Ao_Nang_Krabi_Town_Krabi_Province-Vacations.html" target="_blank">Ao Nang Beach</a></p>' +
            '</div>' +
            '</div>',
            iconImage: beachIcon,
        },
        {
        coords: {
                lat: 8.0268,
                lng: 98.4016
            },
            content: '<div id="content">' +
            '<div id="contentHeader">' +
            '<h3 class="contentTitle"> Phuket Elephant Sanctuary</h3>' +
            '</div>' +
            '<div id="mainContent">' +
            '<p>This is one of the most humbling and life changing experiences which we recommend you definitely do when in Thailand. The elephants are all rescued from' +
            ' various places such as circuses or illegal zoos. This experience is amazing as you get the opertunity to interact with elephants up close, intiially you get to' +
            ' feed the elephants both the adults and the baby elephants. You then move onto a mud scrub where you help cover the elephants in mud which they do in the wild to' +
            ' treat their skin. After is a soak in the water where the elephants are bathed and again you can interact with the elephants here. Finally there is an elephant shower and' +
            ' scrub. To see how these magnificant creatures are treated so well after being rescued from exploitationa nd abuse it amazing.</p>' +
            '<p>See website for more details : <a href="https://elephantjunglesanctuary.com/phuket/" target="_blank">Elephant Jungle Sanctuary</a></p>' +
            '</div>' +
            '</div>',
            iconImage: activityIcon,
        },
        {
        coords: {
                lat: 8.0268,
                lng: 98.4016
            },
            content: '<div id="content">' +
            '<div id="contentHeader">' +
            '<h3 class="contentTitle"> Phuket Elephant Sanctuary</h3>' +
            '</div>' +
            '<div id="mainContent">' +
            '<p>This is one of the most humbling and life changing experiences which we recommend you definitely do when in Thailand. The elephants are all rescued from' +
            ' various places such as circuses or illegal zoos. This experience is amazing as you get the opertunity to interact with elephants up close, intiially you get to' +
            ' feed the elephants both the adults and the baby elephants. You then move onto a mud scrub where you help cover the elephants in mud which they do in the wild to' +
            ' treat their skin. After is a soak in the water where the elephants are bathed and again you can interact with the elephants here. Finally there is an elephant shower and' +
            ' scrub. To see how these magnificant creatures are treated so well after being rescued from exploitationa nd abuse it amazing.</p>' +
            '<p>See website for more details : <a href="https://elephantjunglesanctuary.com/phuket/" target="_blank">Elephant Jungle Sanctuary</a></p>' +
            '</div>' +
            '</div>',
            iconImage: activityIcon,
        },
        {
        coords: {
                lat: 7.9079,
                lng: 98.3301
            },
            content: '<div id="content">' +
            '<div id="contentHeader">' +
            '<h3 class="contentTitle"> Tiger kingdom </h3>' +
            '</div>' +
            '<div id="mainContent">' +
            '<p>The experience offers the ability to meet, play and also take photos with tigers. This is once in a life time experience which we recommend is a must.' +
            ' The tigers are in catagories and you can choose if you would like to meet the adult tigers or if you are not feeling up to that you can settle for the cute' +
            ' baby tigers. You are able to interact and play with the baby tigers in a controlled environment and take pictures. This is an amazing experience which we ' +
            ' highly recommend. The facility has a restaurant and viewing areas where you can see all of the different types of tigers.' +
            ' Most of the tigers were rescued and there are even the rare white tigers there to view.</p>' +
            '<p>See website for more details : <a href="https://www.tigerkingdom.com/" target="_blank">Tiger kingdom</a></p>' +
            '</div>' +
            '</div>',
            iconImage: activityIcon,
        },
        {
        coords: {
                lat: 14.4578,
                lng: 101.3673
            },
            content: '<div id="content">' +
            '<div id="contentHeader">' +
            '<h3 class="contentTitle"> Khao Yai National Park </h3>' +
            '</div>' +
            '<div id="mainContent">' +
            '<p>The Khao Yai National Park is only 2.5 hours from Bangkok but the journey is worth it. The drive there shows beauitiful sites as you climb in altitude.' +
            ' Once at the park you can explore the via a guide and be taken to the most scenic spots which also offer the sites of wild roaming animals. There are herds of wild' +
            ' elephants, wild boar, deer and various types of monkeys. This is an amazing experience to see as you can see the animals in their natural habitat. The experience' +
            ' is unique in comparison to safari trips as the nature and animals are very different in this region. here you get to respect mother nature andyour surroundings as' +
            ' everything here is wild.</p>' +
            '<p>See website for more details : <a href="https://www.thainationalparks.com/khao-yai-national-park" target="_blank">Khao Yai National Park</a></p>' +
            '</div>' +
            '</div>',
            iconImage: activityIcon,
        }
    ];

    // iterate through marker array

    for (var i = 0; 1 < markers.length; i++) {
        myMarker(markers[i]);
    }
       // set markers on map
    function myMarker(mark) {
        let marker = new google.maps.Marker({
            position: mark.coords,
            map: map,
        });
            // set marker images
        if (mark.iconImage) {
            marker.setIcon(mark.iconImage);
        }

        if (mark.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: mark.content,
            });
        }
           // add click listener for infowindow
        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    }

};