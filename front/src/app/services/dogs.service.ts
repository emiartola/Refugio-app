import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../models/dog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DogsService {
  
  apiUrl = 'http://localhost:3000/api';

  constructor( private http: HttpClient) { }

  getDogs(){
    return this.http.get(`${this.apiUrl}/dogs`);
  }

  getDog(id: string){
    return this.http.get(`${this.apiUrl}/dogs/${id}`);
  }

  saveDog(dog: Dog){
    return this.http.post(`${this.apiUrl}/dogs`, dog);
  }

  deleteDog(id: string){
    return this.http.delete(`${this.apiUrl}/dogs/${id}`);
  }

  updateDog(id: string, updatedDog: Dog){
    return this.http.put(`${this.apiUrl}/dogs/${id}`, updatedDog);
  }
  

}
