import { AccountComponent } from '@modules/dashboard/containers/account/account.component';
import { SearchComponent } from '@modules/dashboard/containers/search/search.component';

import { DarkComponent } from './dark/dark.component';
import { DashboardAffiliateComponent } from './dashboard-affiliate/dashboard-affiliate.component';
import { DashboardBlankComponent } from './dashboard-blank/dashboard-blank.component';
import { DashboardMultipurposeComponent } from './dashboard-multipurpose/dashboard-multipurpose.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RtlComponent } from './rtl/rtl.component';
import { StaticComponent } from './static/static.component';

export const containers = [
    DashboardComponent,
    StaticComponent,
    DashboardOverviewComponent,
    DarkComponent,
    RtlComponent,
    DashboardMultipurposeComponent,
    DashboardAffiliateComponent,
    DashboardBlankComponent,
    SearchComponent,
    AccountComponent,
];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './dashboard-overview/dashboard-overview.component';
export * from './dark/dark.component';
export * from './rtl/rtl.component';
export * from './dashboard-multipurpose/dashboard-multipurpose.component';
export * from './dashboard-affiliate/dashboard-affiliate.component';
export * from './dashboard-blank/dashboard-blank.component';
export * from './search/search.component';
export * from './account/account.component';
