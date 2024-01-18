
var net_host
net_host = 'https://tifun.netlify.app'
if (location.hostname === 'localhost') net_host = 'http://localhost'

var net_fun = '/.netlify/functions/'

var tiko = "Timo's classes"

header.textContent = tiko

topnav.classList.add('fixed-top', 'bg-dark')
bottomnav.classList.add('fixed-bottom', 'bg-dark')

for (var elem of ['index', "contact", 'imprint']) {
    var ahref = document.createElement("a");
    ahref.id = elem
    ahref.href = elem + '.html';
    ahref.textContent = elem[0].toUpperCase() + elem.slice(1)
    bottomnav.append(ahref)
}

let path = window.location.pathname.split('/').pop().replace('.html', '')
const element = document.getElementById(path)
if (element) element.classList.add('active');