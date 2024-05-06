var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* définie la largeur de la side navigation à 250px */
function openNav() {
    sidenav.classList.add("active");

}

/* définie la largeur de la side navigation à 0 */
function closeNav() {
    sidenav.classList.remove("active");
}


var headerText = document.getElementById("MyheaderText");
var closeHdr = document.getElementById("MycloseHdr");
console.log(closeHdr)
closeHdr.onclick = closeheader;

function closeheader() {
    headerText.classList.add("active");
}
