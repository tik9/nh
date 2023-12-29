
// console.log(4)

var tiko = "Tiko's"

var aref = document.createElement("a");

// var test = document.createElement("a");
// test.classList.add('focus')
// test.textContent = 'test'
// test.href = '/'
// bottomnav.append(test)

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