import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KegsComponent } from './kegs/kegs.component'

const routes: Routes = [
  { path: 'kegs', component: KegsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
