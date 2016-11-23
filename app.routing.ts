import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';



const APP_ROUTES: Routes = [
{ path: 'artrium',component: HomeComponent },
{ path: '#',component: HomeComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);