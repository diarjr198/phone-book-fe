import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { ContactComponent } from './component/contact/contact.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { LoginComponent } from './component/login/login.component';
import { RecentComponent } from './component/recent/recent.component';
import { RegisterComponent } from './component/register/register.component';
import { ViewComponent } from './component/view/view.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'favorites', component: FavoritesComponent },
	{ path: 'recent', component: RecentComponent },
	{ path: 'add', component: AddComponent },
	{ path: 'view', component: ViewComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
