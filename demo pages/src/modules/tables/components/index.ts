import { AccountDataTableComponent } from '@modules/tables/components/account-data-table/account-data-table.component';
import { DefaultDataTableComponent } from '@modules/tables/components/default-data-table/default-data-table.component';
import { InstanceDataTableComponent } from '@modules/tables/components/instance-data-table/instance-data-table.component';

import { ActivitiesTableComponent } from './activities-table/activities-table.component';
import { NgBootstrapTableComponent } from './ng-bootstrap-table/ng-bootstrap-table.component';
import { PersonDataTableComponent } from './person-data-table/person-data-table.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { SortIconComponent } from './sort-icon/sort-icon.component';

export const components = [
    NgBootstrapTableComponent,
    SortIconComponent,
    ActivitiesTableComponent,
    SearchTableComponent,
    PersonDataTableComponent,
    InstanceDataTableComponent,
    DefaultDataTableComponent,
    AccountDataTableComponent,
];

export * from './ng-bootstrap-table/ng-bootstrap-table.component';
export * from './sort-icon/sort-icon.component';
export * from './activities-table/activities-table.component';
export * from './search-table/search-table.component';
export * from './instance-data-table/instance-data-table.component';
export * from './default-data-table/default-data-table.component';
export * from './account-data-table/account-data-table.component';
