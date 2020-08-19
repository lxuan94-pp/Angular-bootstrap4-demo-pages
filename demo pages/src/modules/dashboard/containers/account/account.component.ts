import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-account',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './account.component.html',
    styleUrls: ['account.component.scss'],
})
export class AccountComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
