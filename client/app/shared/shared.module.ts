import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [AuthService],
})
export class SharedModule { }
