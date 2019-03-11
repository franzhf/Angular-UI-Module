import { Component, OnInit } from '@angular/core';
import {Activity}  from './activity.component';

    

class activityLog {
    private _logs = new Array<any>();
    constructor() {

    }
    add(activity: Activity) {
        
        this._logs.push(activity);
    }


}    