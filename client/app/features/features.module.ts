import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login';
import { HomeComponent } from './home';

@NgModule({
    imports: [
        CommonModule,
        NgbModule
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
