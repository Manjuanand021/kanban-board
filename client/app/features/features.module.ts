import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login';
import { HomeComponent } from './home';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        HomeComponent],
    exports: [
        LoginComponent,
        HomeComponent
    ],
    providers: [],
})
export class FeaturesModule { }
