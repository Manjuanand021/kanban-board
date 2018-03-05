import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared';


@Component({
    selector: 'sp-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    private _fb: FormBuilder;

    private _authService: AuthService;

    private _router: Router;

    constructor(formBuilder: FormBuilder, authService: AuthService, router: Router) {
        this._fb = formBuilder;
        this._authService = authService;
        this._router = router;
    }

    public ngOnInit(): void {
        this.loginForm = this._fb.group({
            email: this._fb.control('', Validators.required),
            password: this._fb.control('', Validators.required)
        });
    }

    public onSubmit(): void {
        this._authService.login({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        }).subscribe(response => {
            if (response.authenticated) {
                this._router.navigate(['/home'])
            }
        });
    }

}