import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-affiliate',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-affiliate.component.html',
    styleUrls: ['dashboard-affiliate.component.scss'],
})
export class DashboardAffiliateComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
