import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-blank',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-blank.component.html',
    styleUrls: ['dashboard-blank.component.scss'],
})
export class DashboardBlankComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
