 import { Component, OnInit } from '@angular/core';
 
 @Component({
     selector: 'ac-view',
     templateUrl: 'activity.component.html'
 })
 export class ActivityComponent implements OnInit {
    activityList: Array<Activity> ;
    constructor() { 
        let readingBook = new Activity(8, TypeOfActivity.Reading, "Clean Code Book by Robert Martin");
        readingBook.burntSessions = 2;
        this.activityList = [
            readingBook,
            new Activity(10, TypeOfActivity.Writing, "Excercing oo in typescript "),
            new Activity(10, TypeOfActivity.Coding, "Phrasal Verbs review"),
            new Activity(10, TypeOfActivity.Reading, "Refactoring by Martin Fowler")
        ]        
    }
 
    ngOnInit() {         
        //console.log(this.activityList);
    }
    
    onClickDelete(activity: Activity) {
        
        for (let index = 0; index < this.activityList.length; index++) {
            const element = this.activityList[index];
            console.log(element);
            if(JSON.stringify(element) ===  JSON.stringify(activity)) {                
                this.activityList.splice(index,1);
                console.log(this.activityList.length);
            }
        }
        
    }

    addActivity(){
        console.log("dasdasdas");
        return false;
    }

 }

 enum TypeOfActivity {
    Reading,
    Writing,
    Coding,
    EnglishTime,
    Designing,
    Listining
}

enum ActivityState {
    New = 'New',
    Progress = 'Progress',
    Completed = 'Completed'
}


export class Activity {
    typeOfActivity: TypeOfActivity;
    storyPoints: number;
    description: string;
    private _state: ActivityState;
    private _burntSessions : number;
    private _remainingSessions : number;

    constructor(storyPoints: number, typeOfActivity:TypeOfActivity, description:string) {
        this.storyPoints = storyPoints;
        this.typeOfActivity = typeOfActivity;
        this.description = description;
        this._state = ActivityState.New;
        this._burntSessions = 0;
        this._remainingSessions = this.storyPoints;
    }     
    
    public get burntSessions() : number {
        return this._burntSessions;
    }
    public set burntSessions(v : number) {
        this._burntSessions = v;
    }    

    public get RemainingSessions() : number {        
        this._remainingSessions = this.storyPoints - this._burntSessions;
        return this._remainingSessions;
    }
    public set RemainingSessions(v : number) {
        this._remainingSessions = v;
    }       
    
    public get state() : ActivityState {   
        this.updateStatus(); // get rid of from here  
        
        return this._state;
    }

    public set state(v : ActivityState) {
        this._state = v;
    }
    
    getFriendlyName() {        
        return this.typeOfActivity + " - " + this.description;
    }
    private updateStatus() {
        if(this.RemainingSessions!=0 && this.RemainingSessions!=this.storyPoints ){
            this._state = ActivityState.Progress;
        }
        else if(this.RemainingSessions==0){
            this._state =  ActivityState.Completed;            
        }
    }
    
    onClickStart() {
        console.log(this.getFriendlyName());
        //this.RemainingSessions = this.RemainingSessions + 2;
    }


}