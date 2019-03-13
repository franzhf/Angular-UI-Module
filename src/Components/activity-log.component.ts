
import { Activity } from '../app/Model/activity';

    

class activityLog {
    private _logs = new Array<any>();
    constructor() {

    }
    add(activity: Activity) {
        
        this._logs.push(activity);
    }


}    