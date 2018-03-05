import { LocalStorage } from './local-storage';

export class StartupContextUtil {

    public static getItem(key: string): any {
        return JSON.parse(new LocalStorage().getItem(key));
    }

    public static setItem(key: string, data: any): void {
        new LocalStorage().setItem(key, JSON.stringify(data));
    }

    public static removeItem(key: string): void {
        new LocalStorage().removeItem(key);
    }

}