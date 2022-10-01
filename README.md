# Local-Storage-Loader
Allows you to load data to your browser's local storage from JSON format<br/>
To use it, first run/include the `main.js` file in this repo, and then use the functions described below<br/>
Feel free to also just use the code from the `main.js` rather than running/including the file itself<br/>


To load:
```javascript
var data = JSON.parse(jsonData);
loadData(data);
```

To save (can be done without initially running `main.js`):
```javascript
var jsonData = JSON.stringify(window.localStorage);
```
