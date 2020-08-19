import { Component, OnInit } from '@angular/core';
import { USERS } from '@modules/tables/data/users';

@Component({
    selector: 'sbpro-instance-data-table',
    templateUrl: './instance-data-table.component.html',
    styleUrls: ['./instance-data-table.component.scss'],
})
export class InstanceDataTableComponent implements OnInit {
    riceID: string | null | undefined;
    // tslint:disable-next-line:no-any
    CurUser: any;
    constructor() {}

    ngOnInit(): void {
        this.riceID = localStorage.getItem('id');
        // console.log(this.riceID);
        // console.log(USERS);
        this.CurUser = USERS.find(n => n.riceID === this.riceID);
        // console.log(this.CurUser);
    }
}
