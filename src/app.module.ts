import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { ActivityComponent } from './components/activity.component';
import { DetailActivityComponent } from './app/detail-activity/detail-activity.component';
import { PostsComponent } from './app/posts/posts.component';
import { NumberValidatorDirective } from './app/number-validator.directive';
import { AddActivityFormComponent } from './app/add-activity-form/add-activity-form.component';

import { DataService } from './app/data.service';
import { ActivityService } from './app/activity-service';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { ReadingActivityFormComponent } from './app/reading-activity-form/reading-activity-form.component';

const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'activities', component: ActivityComponent},
    { path: 'posts', component: PostsComponent},
    { path: 'add', component: AddActivityFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    DetailActivityComponent,
    PostsComponent,
    NumberValidatorDirective,
    AddActivityFormComponent,
    NotFoundComponent,
    ReadingActivityFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService,
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
