import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {ActivityComponent} from './activity/activity.component'

const routes: Routes = [
  { 
    path: '', 
    component: ActivityComponent
  }   
];

@NgModule({
  declarations: [],
  imports: [    
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
