import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { FeedComponent } from './feed/feed.component';
import { NewComponent } from './feed/new/new.component';

const routes: Routes = [
	{ path: '', component: FeedComponent },
	{ path: 'new', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
