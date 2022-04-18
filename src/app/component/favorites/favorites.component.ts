import { Component, OnInit } from '@angular/core';
import { faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faHistory as faHistorySolid } from '@fortawesome/free-solid-svg-icons';
import { SortContact } from 'src/app/_models/SortContact';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: [ './favorites.component.css' ]
})
export class FavoritesComponent implements OnInit {
	faUserSolid = faUserSolid;
	faUserRegular = faUserRegular;
	faPlusCircle = faPlusCircle;
	faStarRegular = faStarRegular;
	faStarSolid = faStarSolid;
	faHistorySolid = faHistorySolid;

	contacts: SortContact[] = [];
	isLoggedIn = false;

	constructor(
		private contactService: ContactService,
		private tokenStorage: TokenStorageService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.isLoggedIn = !!this.tokenStorage.getToken();

		if (!this.isLoggedIn) {
			this.router.navigate([ 'login' ]);
		}
		this.contactService.getFavoriteList().subscribe((data) => {
			let contact: any = data.reduce((r: any, e: any) => {
				// get first letter of name of current element
				let group = e.name[0];
				// if there is no property in accumulator with this letter create it
				if (!r[group]) r[group] = { group, children: [ e ] };
				else
					// if there is push current element to children array for that letter
					r[group].children.push(e);
				// return accumulator
				return r;
			}, {});
			this.contacts = Object.values(contact);
			console.log(this.contacts);
		});
	}

	onFavorite(id_contact: string) {
		this.contactService.addToFavorite(id_contact).subscribe((data) => {
			console.log('berhasil');
			setTimeout(() => {
				window.location.reload();
			}, 500);
		});
	}
}
