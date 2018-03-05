import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FeatureRoutingModule } from './feature.routing';
import { HomeComponent } from './home';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        // FeatureRoutingModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [],
})
export class FeaturesModule { }
