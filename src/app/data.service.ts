import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from './posts/Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endpointUrl: string = "https://jsonplaceholder.typicode.com/posts"; 
  constructor(private  httpClient: HttpClient) { 
    console.log("service  is running");
  }

  getData(){
    return this.httpClient.get<Post[]>(this.endpointUrl);
  }
}
