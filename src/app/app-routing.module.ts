import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { 
    path: 'posts', 
    component: PostsComponent
  }, 
  { path: 'activities', 
    loadChildren: './trackingapp-activity/activity.module#ActivityModule'
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
