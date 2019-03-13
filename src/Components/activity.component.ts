 import { Component, OnInit } from '@angular/core';
 import { TypeOfActivity, ActivityState, Activity } from '../app/Model/activity';
 import { ActivityService } from '../app/activity-service';

 
 @Component({
    selector: 'app-activity',
    templateUrl: 'activity.component.html',
    styleUrls: []
})

export class ActivityComponent implements OnInit {
    activityList: Activity[] ;
    constructor(private activityService: ActivityService) {
        this.activityService.getData().subscribe(data => {            
            this.activityList = data;
        })
    }

   ngOnInit() {
   }
   
   onClickDelete(activity: WrapperActivity) {       
       for (let index = 0; index < this.activityList.length; index++) {
           const element = this.activityList[index];
           console.log(element);
           if(JSON.stringify(element) ===  JSON.stringify(activity)) {                
               this.activityList.splice(index,1);
               console.log(this.activityList.length);
           }
       }       
   }
}

 export class WrapperActivity {
    _activity: Activity
    constructor(activity:Activity) {
    }     
    
    public get burntSessions() : number {
        return this._activity.burntSessions;
    }
    public set burntSessions(v : number) {
        this._activity.burntSessions = v;
    }    

    public get RemainingSessions() : number {        
        this._activity.remainingSessions = this._activity.storyPoints - this._activity.burntSessions;
        return this._activity.remainingSessions;
    }
    public set RemainingSessions(v : number) {
        this._activity.remainingSessions = v;
    }       
    
    public get state() : ActivityState {   
        this.updateStatus(); // get rid of from here  
        
        return this._activity.state;
    }

    public set state(v : ActivityState) {
        this._activity.state = v;
    }
    
    getFriendlyName() {        
        return this._activity.typeOfActivity + " - " + this._activity.description;
    }
    private updateStatus() {
        if(this.RemainingSessions!=0 && this.RemainingSessions!=this._activity.storyPoints ){
            this._activity.state = ActivityState.Progress;
        }
        else if(this.RemainingSessions==0){
            this._activity.state =  ActivityState.Completed;            
        }
    }
    
    onClickStart() {
        console.log(this.getFriendlyName());
        //this.RemainingSessions = this.RemainingSessions + 2;
    }
}