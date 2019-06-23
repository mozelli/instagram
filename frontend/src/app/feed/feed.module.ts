import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


//Components
import { FeedComponent } from './feed.component';
import { NewComponent } from './new/new.component';

//Providers

@NgModule({
  declarations: [
  	FeedComponent,
  	NewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class FeedModule { }
