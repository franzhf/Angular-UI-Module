import { IEntity } from './entity';
import { Guid } from "guid-typescript";

export enum TypeOfActivity {
    Reading,
    Writing,
    Coding,
    EnglishTime,
    Designing,
    Listining
}

export enum ActivityState {
    New = 'New',
    Progress = 'Progress',
    Completed = 'Completed'
}

export interface  IActivity  {

    typeOfActivity: TypeOfActivity;
    storyPoints: number;
    description: string;
}

export class Activity implements IActivity, IEntity{
    public id:any;
    public typeOfActivity: TypeOfActivity;
    public storyPoints: number;
    public description: string;
    public state: ActivityState;
    public burntSessions : number;
    public remainingSessions : number;

    constructor (storyPoints, typeOfActivity, description) {
        this.id = Guid.create();
        this.typeOfActivity = typeOfActivity;
        this.storyPoints = storyPoints;
        this.description = description;
        this.state = ActivityState.New;
    }
    
    getFriendlyName() {        
        return this.typeOfActivity + " - " + this.description;
    }
}