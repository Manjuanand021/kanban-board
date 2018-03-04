import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'sp-login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})

export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    private _fb: FormBuilder;

    private _authService: AuthService;

    constructor(formBuilder: FormBuilder, authService: AuthService) {
        this._fb = formBuilder;
        this._authService = authService;
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
        });
    }

}