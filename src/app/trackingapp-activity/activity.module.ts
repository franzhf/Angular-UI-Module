import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AddActivityDialogComponent } from './add-activity-dialog/add-activity-dialog.component';
import { ReadingActivityFormComponent } from './reading-activity/reading-activity-form.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivityRoutingModule } from "./activity-routing.module";
import { ActivityService } from './activity-service';

@NgModule({
    declarations: [ActivityComponent, AddActivityDialogComponent],
    imports: [ CommonModule, FormsModule, ActivityRoutingModule ],
    exports: [ActivityComponent],
    providers: [ActivityService],
})
export class ActivityModule {

}