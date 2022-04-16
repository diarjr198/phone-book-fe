import { Component, OnInit } from '@angular/core';
import { faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faHistory as faHistorySolid } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: [ './contact.component.css' ]
})
export class ContactComponent implements OnInit {
	faUserSolid = faUserSolid;
	faPlusCircle = faPlusCircle;
	faStarRegular = faStarRegular;
	faStarSolid = faStarSolid;
	faHistorySolid = faHistorySolid;

	constructor() {}

	ngOnInit(): void {}
}
