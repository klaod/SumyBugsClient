import {Routes} from '@angular/router';
import {IssuesComponent} from './issues/issues.component';
import {MainComponent} from './main/main.component';
export const appRoutes: Routes = [
    {path: 'issues' , component: IssuesComponent},
    {path: 'main' , component: MainComponent},
    {path: '' , redirectTo: '/issues', pathMatch: 'full'}
];
