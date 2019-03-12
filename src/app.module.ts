import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { DataService } from './app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { ActivityComponent } from './components/activity.component';
import { DetailActivityComponent } from './app/detail-activity/detail-activity.component';
import { PostsComponent } from './app/posts/posts.component';
import { NumberValidatorDirective } from './app/number-validator.directive';


const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'activities', component: ActivityComponent},
    { path: 'posts', component: PostsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    DetailActivityComponent,
    PostsComponent,
    NumberValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent, ActivityComponent]
})
export class AppModule { }
