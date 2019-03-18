import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule,  MatFormFieldModule, MatDialogModule } from '@angular/material';

import { ActivityModule } from './app/trackingapp-activity/activity.module';
import { AppRoutingModule } from './app/app-routing.module';

import { AppComponent } from './app/app.component';
import { PostsComponent } from './app/posts/posts.component';
import { NumberValidatorDirective } from './app/number-validator.directive';
import { NotFoundComponent } from './app/not-found/not-found.component';

import { DataService } from './app/data.service';



@NgModule({
  declarations: [
    AppComponent,      
    PostsComponent,
    NumberValidatorDirective,    
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActivityModule,
    HttpClientModule,    
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [
    DataService    
  ],
  
  entryComponents: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
