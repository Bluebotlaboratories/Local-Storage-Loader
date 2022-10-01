# Local-Storage-Loader
Allows you to load data to your browser's local storage from JSON format
To use it, first run the `main.js` file in this repo, and then use the functions described below


To load:
```javascript
var data = JSON.parse(jsonData);
loadData(data);
```

To save (can be done without initially running `main.js`):
```javascript
var jsonData = JSON.stringify(window.localStorage);
```
