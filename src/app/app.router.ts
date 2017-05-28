import {Routes} from '@angular/router';
import {IssuesComponent} from './issues/issues.component';
import {MainComponent} from './main/main.component';
import {ModerateComponent} from './moderate/moderate.component';
import {IssueComponent} from "./issue/issue.component";
export const appRoutes: Routes = [
    {path: 'issues' , component: IssuesComponent},
    {path: 'main' , component: MainComponent},
    {path: 'moderate' , component: ModerateComponent},
    {path: 'issues/:id' , component: IssueComponent},
    {path: 'issue/:id' , component: IssueComponent},
    {path: 'main/:id' , component: IssueComponent},
    {path: 'moderate/:id' , component: IssueComponent},
    {path: '' , redirectTo: '/main', pathMatch: 'full'}
];
