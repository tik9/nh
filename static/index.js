
var alias_cloud = 'social_cloud'
var dateformat = /^\d{4}-\d{2}-\d{2}/
var github = 'https://github.com/'
var git = github + 'tik9/'
var git2 = git + 'tik'
var gitBase = git2 + '/blob/master'
var net_fun = '/.netlify/functions/'
var net_host = 'http://localhost'
var net_host = 'https://tik2.netlify.app'
var net_mongo = net_host + net_fun + 'mongo?op=find&coll='

index()

async function index() {
    var index = arguments.callee.name
    await indexfun()
    var res = []
    res = await (await fetch(net_mongo + index)).json()
    res = res.filter(val => val.category === 'nachhilfe');
    // console.log(2, res)
    var div = document.getElementById(index)
    res = res.map(obj => ({ ...obj, url: '#' + obj.name }))
    div.append(table(res, index))
    div.classList.add('mt-5')

    res = await (await fetch(net_host + net_fun + 'sys')).json()
    subjects_about()
}
async function indexfun(topic = 'index') {
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
        aHref.classList.add('active', 'nav')
        aHref.href = '#container'
    }
    return elem
}