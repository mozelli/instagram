import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { PostComponent } from './post.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
  	PostComponent,
  	NewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	HttpClientModule
  ],
  exports: [
  	PostComponent
  ]
})
export class PostModule { }
