import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Devjobs-web-app - Home',
        component: HomeComponent
    },
    {
        path: ':id',
        title: 'Devjobs-web-app - Details',
        component: JobDetailsComponent
    },
    {
        path: '**',
        redirectTo: '',
        component: HomeComponent
    }
];
