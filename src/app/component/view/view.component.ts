import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

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

	constructor() {}

	ngOnInit(): void {}
}
