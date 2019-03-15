// Let's keep it simple and only add the following methods to the Map:

// setItem(key: string, item: T) // should create a new key-value pair

// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:

interface KeyMap < T > {
    [propName: string]: T
}

class MyMap < T > {
    private _map: KeyMap < T > ;

    constructor() {
        this._map = {}
    }

    setItem(key: string, item: T): void {
        this._map[key] = item;
    }

    getItem(key: string): T {
        return this._map[key];
    }

    clear(): void {
        let self = this;
        Object.keys(this._map).forEach((key) => {
            delete self._map[key];
        });
    }

    printMap(): void {
        let self = this;
        Object.keys(this._map).forEach((key) => {
            console.log(key + " -> " + self._map[key]);
        });
    }
}

const numberMap = new MyMap < number > ();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap < string > ();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();