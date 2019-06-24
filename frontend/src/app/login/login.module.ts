import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login.component';

// Services
import { LoginService } from './login.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
  	LoginComponent,
  	ConfirmationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class LoginModule { }
