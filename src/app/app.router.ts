import {Routes} from '@angular/router';
import {IssuesComponent} from './issues/issues.component';
import {MainComponent} from './main/main.component';
import {ModerateComponent} from './moderate/moderate.component';
import {IssueComponent} from "./issue/issue.component";
export const appRoutes: Routes = [
    {path: 'issues' , component: IssuesComponent},
    {path: 'main' , component: MainComponent},
    {path: 'moderate' , component: ModerateComponent},
    {path: 'issue/:id' , component: IssueComponent},
    {path: '' , redirectTo: '/main', pathMatch: 'full'}
];
