import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../_models/Contact';
import { TokenStorageService } from './token-storage.service';

const API_URL = environment.API_URL;

@Injectable({
	providedIn: 'root'
})
export class ContactService {
	constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

	getListContacts(): Observable<Contact[]> {
		const id_user = this.tokenStorage.getUser().user.id;
		return this.http.get<Contact[]>(API_URL + 'user/list?id_user=' + id_user);
	}

	getContactSpecific(id_contact: string): Observable<Contact> {
		const id_user = this.tokenStorage.getUser().user.id;
		return this.http.get<Contact>(API_URL + 'user/listspecific?id_user=' + id_user + '&id_contact=' + id_contact);
	}

	addContact(name: string, phone: string, email: string, company: string, job: string) {
		const id_user = this.tokenStorage.getUser().user.id;
		return this.http.post<Contact>(API_URL + 'user/add?id_user=' + id_user, {
			name,
			phone,
			email,
			company,
			job
		});
	}

	updateContact(id_contact: string, name: string, phone: string, email: string, company: string, job: string) {
		const id_user = this.tokenStorage.getUser().user.id;
		return this.http.put<Contact>(API_URL + 'user/update?id_user=' + id_user + '&id_contact=' + id_contact, {
			name,
			phone,
			email,
			company,
			job
		});
	}

	deleteContact(id_contact: string) {
		const id_user = this.tokenStorage.getUser().user.id;
		return this.http.delete<Contact>(API_URL + 'user/delete?id_user=' + id_user + '&id_contact=' + id_contact);
	}

	getFavoriteList(): Observable<Contact[]> {
		const id_user = this.tokenStorage.getUser().user.id;
		return this.http.get<Contact[]>(API_URL + 'user/listfavorite?id_user=' + id_user);
	}

	getRecentList(): Observable<Contact[]> {
		const id_user = this.tokenStorage.getUser().user.id;
		return this.http.get<Contact[]>(API_URL + 'user/recent?id_user=' + id_user);
	}

	addToFavorite(id_contact: string) {
		const id_user = this.tokenStorage.getUser().user.id;
		return this.http.patch<Contact>(API_URL + 'user/favorite?id_user=' + id_user + '&id_contact=' + id_contact, {});
	}
}
