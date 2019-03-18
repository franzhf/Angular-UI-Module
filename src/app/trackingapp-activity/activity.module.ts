import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ReadingActivityFormComponent } from './reading-activity/reading-activity-form.component';
import {ActivityComponent} from './activity/activity.component'

import { ActivityRoutingModule } from "./activity-routing.module";
import { ActivityService } from './activity-service';

@NgModule({
    declarations: [ActivityComponent, ],
    imports: [  FormsModule, ActivityRoutingModule, CommonModule],
    exports: [],
    entryComponents:[],
    providers: [ActivityService],
})
export class ActivityModule {
    test: string = 'activity module!!';
}