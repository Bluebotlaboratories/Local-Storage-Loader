# Local-Storage-Loader
A Javascript library
To use it, first run the `main.js` file in this repo, and then use the functions described below


To load:
```javascript
var data = JSON.parse(copiedData);
loadData(data);
```

To save (can be done without initially running `main.js`):
```javascript
JSON.stringify(window.localStorage);
```
