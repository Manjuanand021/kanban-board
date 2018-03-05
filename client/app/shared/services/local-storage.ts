export class LocalStorage {

    protected storage: Storage;

    constructor() {
        this.storage = this._getLocalStorage();
    }

    public getItem(key: string): any {
        return this.storage.getItem(key);
    }

    public setItem(key: string, data: string): void {
        return this.storage.setItem(key, data);
    }

    public removeItem(key: string): void {
        return this.storage.removeItem(key);
    }

    private _getLocalStorage(): any {
        if ('localStorage' in window && window.localStorage !== null) {
            return window.localStorage;
        }
        throw new Error('Local Storage is disabled or unavailable.');
    }
}
