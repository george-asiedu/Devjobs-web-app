import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../model/jobs';

@Injectable({
  providedIn: 'root'
})
export class AllJobsService {

  private devjobsUrl = 'https://64281ee346fd35eb7c4bfc31.mockapi.io/dev'

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.devjobsUrl)
  }
}
