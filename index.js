

const navBarItems = document.querySelectorAll('.navbar__item');
document.querySelectorAll('.navbar__item').forEach(
    function(element) {
        element.onclick = function(event) {
            event.preventDefault();
            let previousNav = document.getElementsByClassName("active-nav");
            previousNav[0].className = previousNav[0].className.replace (" active-nav", "");
            this.className += " active-nav";
            let pageName = this.innerText;
            changePage(pageName);
        };
    }
);

function changePage(pageName) {
    let previousPage = document.getElementsByClassName('active-page');
    previousPage[0].className = previousPage[0].className.replace (" active-page", "");

    currentPage = pageName.toUpperCase();
    const activeClass = 'active-page';
    document.querySelector('#'+ currentPage).classList.add(activeClass);
    previousPage = currentPage;
}

function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}