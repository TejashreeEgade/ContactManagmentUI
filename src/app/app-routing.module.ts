import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard/add', component: AddContactComponent },
  { path: 'dashboard/edit/:id', component: EditContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
