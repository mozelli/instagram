import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { UserComponent } from './user.component';

// Module
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Services
import { UserService } from './user.service';


@NgModule({
  declarations: [
  	UserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
