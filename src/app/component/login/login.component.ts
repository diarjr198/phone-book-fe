import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	form: any = {
		email: null,
		password: null
	};
	isLoggedIn = false;
	isLoginFailed = false;
	errorMessage = '';
	name: string = '';
	token: string | null = '';

	constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {}

	ngOnInit(): void {
		this.isLoggedIn = !!this.tokenStorage.getToken();

		if (this.isLoggedIn) {
			this.router.navigate([ 'contact' ]);
		}
	}

	onSubmit(): void {
		const { email, password } = this.form;
		this.authService.login(email, password).subscribe(
			(res) => {
				const token = res.token;
				this.token = token;
				this.tokenStorage.saveToken(token);
				this.tokenStorage.saveUser(res);
				this.isLoginFailed = false;
				this.isLoggedIn = true;
				setTimeout(() => {
					this.router.navigate([ 'contact' ]);
				}, 500);
			},
			(err) => {
				this.errorMessage = err.error.message;
				this.isLoginFailed = true;
			}
		);
	}
}
