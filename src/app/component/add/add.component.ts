import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [ './add.component.css' ]
})
export class AddComponent implements OnInit {
	faArrowLeft = faArrowLeft;
	faUserSolid = faUserSolid;

	form: any = {
		name: null,
		phone: null,
		email: null,
		company: null,
		job: null
	};

	constructor(private contactService: ContactService, private router: Router) {}

	ngOnInit(): void {}

	onSubmit(): void {
		const { name, phone, email, company, job } = this.form;
		this.contactService.addContact(name, phone, email, company, job).subscribe(
			(data) => {
				console.log('berhasil');
				setTimeout(() => {
					this.router.navigate([ 'view/' + data._id ]);
				});
			},
			(err) => {
				console.log('gagal');
			}
		);
	}
}
