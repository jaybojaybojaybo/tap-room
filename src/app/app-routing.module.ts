import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KegsComponent } from './kegs/kegs.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { KegDetailComponent } from './keg-detail/keg-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'kegs', component: KegsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: KegDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
