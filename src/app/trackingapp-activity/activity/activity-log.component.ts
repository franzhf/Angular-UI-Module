
import { Activity } from '../model/activity';

    

class activityLog {
    private _logs = new Array<any>();
    constructor() {

    }
    add(activity: Activity) {
        
        this._logs.push(activity);
    }


}    