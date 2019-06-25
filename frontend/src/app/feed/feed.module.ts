import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Components
import { FeedComponent } from './feed.component';

// Modules
import { PostModule } from '../post/post.module';

@NgModule({
  declarations: [
  	FeedComponent
  ],
  imports: [
    CommonModule,
    PostModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FeedModule { }
