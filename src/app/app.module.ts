import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ContactComponent } from './component/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { RecentComponent } from './component/recent/recent.component';
import { AddComponent } from './component/add/add.component';
import { ViewComponent } from './component/view/view.component';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		ContactComponent,
		FavoritesComponent,
		RecentComponent,
		AddComponent,
		ViewComponent
	],
	imports: [ BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule, HttpClientModule ],
	providers: [ authInterceptorProviders ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
