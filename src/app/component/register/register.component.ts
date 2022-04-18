import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	form: any = {
		name: null,
		email: null,
		password: null
	};
	isLoggedIn = false;
	isLoginFailed = false;
	errorMessage = '';
	name: string = '';
	token: string | null = '';

	constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) {}

	ngOnInit(): void {
		this.isLoggedIn = !!this.tokenStorage.getToken();

		if (this.isLoggedIn) {
			this.router.navigate([ 'contact' ]);
		}
	}

	onSubmit(): void {
		const { name, email, password } = this.form;
		this.authService.register(name, email, password).subscribe(
			(res) => {
				console.log('Berhasil');
				setTimeout(() => {
					this.router.navigate([ 'login' ]);
				}, 500);
			},
			(err) => {
				console.log('Gagal');
			}
		);
	}
}
