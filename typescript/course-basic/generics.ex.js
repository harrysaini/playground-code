// Let's keep it simple and only add the following methods to the Map:
class MyMap {
    constructor() {
        this._map = {};
    }
    setItem(key, item) {
        this._map[key] = item;
    }
    getItem(key) {
        return this._map[key];
    }
    clear() {
        let self = this;
        Object.keys(this._map).forEach((key) => {
            delete self._map[key];
        });
    }
    printMap() {
        let self = this;
        Object.keys(this._map).forEach((key) => {
            console.log(key + " -> " + self._map[key]);
        });
    }
}
const numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
const stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
