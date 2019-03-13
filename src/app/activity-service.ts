import { Injectable } from '@angular/core';
import { TypeOfActivity, ActivityState, Activity } from './Model/activity';
import { Observable, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
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

  getData(): Observable<Activity[]>{
    return of(this.activityList);
  }
}
