import { ActivitiesService } from './activities.service';
import { CountryService } from './country.service';
import { TablesService } from './tables.service';
import { UserService } from './user.service';

export const services = [TablesService, CountryService, ActivitiesService, UserService];

export * from './tables.service';
export * from './country.service';
export * from './activities.service';
export * from './user.service';
