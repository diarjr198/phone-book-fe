import { Component, OnInit } from '@angular/core';
import { faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faHistory as faHistorySolid } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-recent',
	templateUrl: './recent.component.html',
	styleUrls: [ './recent.component.css' ]
})
export class RecentComponent implements OnInit {
	faUserSolid = faUserSolid;
	faUserRegular = faUserRegular;
	faPlusCircle = faPlusCircle;
	faStarRegular = faStarRegular;
	faStarSolid = faStarSolid;
	faHistorySolid = faHistorySolid;
	constructor() {}

	ngOnInit(): void {}
}
