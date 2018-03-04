import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor() { }

    public login({ email, password }: { email: string; password: string }): void {
        console.log(email);
        console.log(password);
    }
};

