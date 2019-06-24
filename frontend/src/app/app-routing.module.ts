import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { FeedComponent } from './feed/feed.component';
import { NewComponent } from './feed/new/new.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ConfirmationComponent } from './login/confirmation/confirmation.component';


const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'feed', component: FeedComponent },
	{ path: 'newUser', component: UserComponent },
	{ path: 'new', component: NewComponent },
	{ path: 'newUserConfirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
