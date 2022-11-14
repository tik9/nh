
var cdn = 'https://cdnjs.cloudflare.com/ajax/libs/'
var tiko = "Tiko's"

document.title = tiko
document.body.style.paddingTop = '90px'
container.style.paddingBottom = '80px'

nav()

function nav() {
    var aref = document.createElement("a");
    topnav.classList.add('fixed-top', 'bg-dark')
    bottomnav.classList.add('fixed-bottom', 'bg-dark')
    aref.textContent = tiko;
    aref.href = '/'
    aref.classList.add('active', 'nav')
    bottomnav.append(aref)
    for (var elem of ["contact", 'imprint']) {
        var ahref = document.createElement("a");
        ahref.href = '/' + elem;
        ahref.textContent = elem[0].toUpperCase() + elem.slice(1)
        ahref.classList.add('nav')
        bottomnav.append(ahref)
    }
}