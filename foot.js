
var net_host
net_host = 'https://tifun.netlify.app'
if (location.hostname === 'localhost') net_host = 'http://localhost'

var net_fun = '/.netlify/functions/'

var tiko = "Timo's classes"

header.textContent = tiko

var aref = document.createElement("a");

topnav.classList.add('fixed-top', 'bg-dark')
bottomnav.classList.add('fixed-bottom', 'bg-dark')
aref.textContent = tiko;
aref.href = '/'
aref.classList.add('active')
bottomnav.append(aref)
for (var elem of ["contact", 'imprint']) {
    var ahref = document.createElement("a");
    ahref.href = '/' + elem;
    ahref.textContent = elem[0].toUpperCase() + elem.slice(1)
    ahref.classList.add('nav')
    bottomnav.append(ahref)
}