import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoderunnerService {

  constructor(private http:HttpClient) { }
  execute(language: string, code: string) {
   
    return this.http.post<string>('http://localhost:3000/run', { language, code });
  }
}
