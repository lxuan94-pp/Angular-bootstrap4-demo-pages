import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardMultiCardComponent } from './dashboard-multi-card/dashboard-multi-card.component';
import { DashboardMultiImageCardsComponent } from './dashboard-multi-image-cards/dashboard-multi-image-cards.component';
import { DashboardProjectsOverviewComponent } from './dashboard-projects-overview/dashboard-projects-overview.component';
import { DashboardTablesComponent } from './dashboard-tables/dashboard-tables.component';

export const components = [
    DashboardCardsComponent,
    DashboardChartsComponent,
    DashboardTablesComponent,
    DashboardMultiCardComponent,
    DashboardProjectsOverviewComponent,
    DashboardMultiImageCardsComponent,
];

export * from './dashboard-cards/dashboard-cards.component';
export * from './dashboard-charts/dashboard-charts.component';
export * from './dashboard-tables/dashboard-tables.component';
export * from './dashboard-multi-card/dashboard-multi-card.component';
export * from './dashboard-projects-overview/dashboard-projects-overview.component';
export * from './dashboard-multi-image-cards/dashboard-multi-image-cards.component';
