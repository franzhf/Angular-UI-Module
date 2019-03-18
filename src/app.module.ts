import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule,  MatFormFieldModule, MatDialogModule } from '@angular/material';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app/app-routing.module';

import { AppComponent } from './app/app.component';
import { PostsComponent } from './app/posts/posts.component';
import { NumberValidatorDirective } from './app/number-validator.directive';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { AddActivityDialogComponent } from './app/trackingapp-activity/add-activity-dialog/add-activity-dialog.component';

import { DataService } from './app/data.service';



@NgModule({
  declarations: [
    AppComponent,      
    PostsComponent,
    NumberValidatorDirective,    
    NotFoundComponent,
    AddActivityDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,    
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    DataService    
  ],
  
  entryComponents: [AddActivityDialogComponent] ,
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
