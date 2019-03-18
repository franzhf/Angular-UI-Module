import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'activities', 
    loadChildren: './trackingapp-activity/activity.module#ActivityModule'
  },
  { 
    path: 'posts', 
    component: PostsComponent
  } 
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
