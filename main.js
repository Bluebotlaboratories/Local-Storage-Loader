function loadData(data) {
    keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
		window.localStorage.setItem(keys[i], data[keys[i]])
    }
}

// To load:
// var data = JSON.parse(copiedData);
// loadData(data);

// To save:
// JSON.stringify(window.localStorage);
