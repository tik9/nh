
var alias_cloud = 'social_cloud'
var dateformat = /^\d{4}-\d{2}-\d{2}/
var github = 'https://github.com/'
var git = github + 'tik9/'
var git2 = git + 'tik'
var gitBase = git2 + '/blob/master'
var net_fun = '/.netlify/functions/'
var net_host = 'http://localhost'
var net_host = 'https://tifun.netlify.app'
var net_mongo = net_host + net_fun + 'mongo?op=find&coll='

index()

async function index() {
    var index = arguments.callee.name

    await client()
    var res = []
    res = await (await fetch(net_mongo + index)).json()
    res = res.filter(val => val.category === 'nachhilfe');
    res = res.map(obj => ({ ...obj, url: '#' + obj.name }))
    // console.log(2, res)
    var div = document.getElementById(index)
    div.append(table(res, index))
    div.classList.add('mt-5')

    await subjects();
    (await client('Ihr client')).append(document.createTextNode('Browser: ' + navigator.userAgent))
}

async function subjects() {
    var elem = 'tools'
    res = (await (await fetch(net_mongo + elem)).json()).filter(val => val.category === 'nachhilfe')
    // console.log(res);

    var updatedRes = res.map(({ tool }) => ({ Fach: tool }));
    (await client('fächer')).append(table(updatedRes, elem))
}