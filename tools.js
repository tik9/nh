
async function subjects_about() {
    var elem = 'tools'

    // for (var elem of ['subjects', 'about_me']) {
    var res = await (await fetch(net_mongo + elem)).json();
    res = res.filter(val => val.category === 'nachhilfe')
    // console.log(res);
    var first = res[0]

    var first_key = Object.keys(first)[0]
    var sec_key = Object.keys(first)[1]
    // for (key in arr) {
    // var val = arr[key]
    // if (key == first_key)

    var updatedRes = res.map(({ tool }) => ({ Fach: tool }));
    (await indexfun('fächer')).append(table(updatedRes, elem))
}

async function dic() {
    var res = await (await fetch('/dic/ace')).json()
}
