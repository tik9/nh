
document.title = tiko
document.body.style.paddingTop = '90px'
container.style.paddingBottom = '80px'

var net_host = 'http://localhost'
var net_host = 'https://tifun.netlify.app'
var net_fun = '/.netlify/functions/'

data()
async function data() {
    var data = 'data'
    var res = (await (await fetch(net_host + net_fun + 'mongo?op=find&coll=' + data)).json());
    res = await (await (fetch(net_host + net_fun + 'utils', { method: 'post', body: JSON.stringify({ type: 'sortTable', val: res, sort1: 'cat', sort2: 'text' }) }))).json();

    var main_div = document.createElement('div')
    main_div.id = data
    container.append(main_div)
    var list = document.createElement('ul')
    main_div.append(list)

    // res = [        { text: 'Alice', cat: 21 },{ text: 'Max', cat: 20 },{ text: 'Jane', cat: 20 },{ text: 'Jane2', cat: 20 },{ text: 'Jane3', cat: 22 },];

    function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
            var key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    res = groupBy(res, 'cat');
    // console.log(res)

    for (var elem in res) {
        var head = document.createElement('h5')
        head.textContent = elem
        head.style.marginTop = '40px'
        list.append(head)
        for (var elem2 of res[elem]) {
            var li = document.createElement('li')
            li.textContent = elem2.text
            list.append(li)
        }
    }
}


function table(arr) {
    var excludes = ['_id', '__v', 'cat', 'name', 'url']
    var table_ = document.createElement('table')
    var thead = document.createElement('thead')
    var tr = document.createElement('tr')
    thead.appendChild(tr)
    var columns = []
    for (var elem of arr) {
        for (var key in elem) {
            if (excludes.includes(key)) continue
            if (elem.hasOwnProperty(key) && !columns.includes(key)) {
                columns.push(key);
                var th = document.createElement('th')
                th.appendChild(document.createTextNode(key[0].toUpperCase() + key.slice(1)));
                tr.appendChild(th);
            }
        }
    }
    table_.appendChild(thead);
    var tbody = document.createElement('tbody');
    for (var elem of arr) {
        var tr = document.createElement('tr')

        for (var elem2 of columns) {
            var val = elem[elem2]
            var td = document.createElement('td');


            td.innerHTML = val
            tr.appendChild(td);
        }
        tbody.appendChild(tr)
    }
    table_.appendChild(tbody);
    table_.classList.add('table', 'table-bordered', 'table-striped')
    return table_;
}