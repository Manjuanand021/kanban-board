import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
    private _http: HttpClient;

    constructor(http: HttpClient) {
        this._http = http;
    }

    public login({ email, password }: { email: string; password: string }): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const requestBody = {
            email: email,
            password: password
        };
        return this._http.post('/api/auth/login', requestBody, httpOptions).pipe(
            map((result) => {
                console.log(`login response - ${result}`);
                return result;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    private handleError(error: HttpErrorResponse): ErrorObservable {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    };
};

