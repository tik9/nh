
function aref(elem, val) {
    var ahref = document.createElement('a')
    ahref.textContent = val
    ahref.href = elem.url
    return ahref
}

function table(arr, src) {
    var excludes = ['_id', '__v', 'category', 'name', 'url']
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
                if (['title', 'text'].includes(key)) continue
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

            if (src == 'index') {
                if (elem2 == 'title') {
                    td.append(aref(elem, val))
                }
                else if (elem2 == 'text') td.innerHTML = val
            }
            else td.innerHTML = val

            tr.appendChild(td);
        }
        tbody.appendChild(tr)
    }
    table_.appendChild(tbody);
    table_.classList.add('table', 'table-bordered', 'table-striped')
    return table_;
}