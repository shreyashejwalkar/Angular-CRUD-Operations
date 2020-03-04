import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueListComponent } from './issue-list/issue-list.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-issue' },
  { path: 'add-issue', component: AddIssueComponent },
  { path: 'edit-issue/:id', component: EditIssueComponent },
  { path: 'issues-list', component: IssueListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [IssueListComponent,AddIssueComponent,EditIssueComponent];
