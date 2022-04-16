import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [ './add.component.css' ]
})
export class AddComponent implements OnInit {
	faArrowLeft = faArrowLeft;
	faUserSolid = faUserSolid;

	constructor() {}

	ngOnInit(): void {}
}
