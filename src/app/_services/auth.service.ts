import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.API_URL;

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient) {}

	login(email: string, password: string) {
		return this.http.post<{ token: string; user: object }>(AUTH_API + 'login', { email, password });
	}

	register(name: string, email: string, password: string) {
		return this.http.post<{ data: object }>(AUTH_API + 'register', {
			name,
			email,
			password
		});
	}
}
