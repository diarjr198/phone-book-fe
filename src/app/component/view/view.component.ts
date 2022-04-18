import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/_services/contact.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Contact } from 'src/app/_models/Contact';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: [ './view.component.css' ]
})
export class ViewComponent implements OnInit {
	faArrowLeft = faArrowLeft;
	faUserSolid = faUserSolid;
	faPhone = faPhone;
	faBuilding = faBuilding;
	faTools = faTools;
	faEnvelope = faEnvelope;
	faEdit = faEdit;
	faTrash = faTrash;

	contact: Contact = {};
	id: string = '';
	isLoggedIn = false;
	isEdit = false;

	form: any = {
		name: null,
		phone: null,
		email: null,
		company: null,
		job: null
	};

	constructor(
		private contactService: ContactService,
		private tokenStorage: TokenStorageService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.isLoggedIn = !!this.tokenStorage.getToken();

		if (!this.isLoggedIn) {
			this.router.navigate([ 'login' ]);
		}
		this.route.params.subscribe((params) => {
			// console.log(params); //log the entire params object
			// console.log(params['id']); //log the value of id
			this.id = params['id'];
		});

		this.contactService.getContactSpecific(this.id).subscribe((data) => {
			this.contact = data;
		});
	}

	onEdit(): void {
		this.isEdit = true;
	}

	onDelete(): void {
		this.contactService.deleteContact(this.id).subscribe((data) => {
			console.log('berhasil');
			setTimeout(() => {
				this.router.navigate([ 'contact' ]);
			}, 500);
		});
	}

	onSubmit(id_contact: string, name: string, phone: string, email: string, company: string, job: string): void {
		this.contactService.updateContact(id_contact, name, phone, email, company, job).subscribe((data) => {
			console.log('berhasil');
			setTimeout(() => {
				window.location.reload();
			}, 500);
		});
	}
}
