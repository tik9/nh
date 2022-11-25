
var cdn = 'https://cdnjs.cloudflare.com/ajax/libs/'
var tiko = "Tiko's"

document.title = tiko
document.body.style.paddingTop = '90px'
container.style.paddingBottom = '80px'

async function client(topic = 'index') {
    var topicUp = topic[0].toUpperCase() + topic.slice(1)
    var elem = document.createElement('div')
    container.append(elem)
    elem.id = topic

    var hIntro = document.createElement("h4");
    hIntro.classList.add('mt-5', 'mb-3');
    hIntro.innerHTML = topicUp
    elem.prepend(hIntro)
    var aHref = document.createElement("a");
    aHref.textContent = topicUp
    aHref.classList.add('nav')
    aHref.href = '#' + topic
    topnav.append(aHref)
    if (topic === 'index') {
        aHref.classList.add('active')
        aHref.href = '#container'
    }
    return elem
}

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