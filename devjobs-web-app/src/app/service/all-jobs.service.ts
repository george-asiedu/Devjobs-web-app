import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Jobs } from '../model/jobs';

@Injectable({
  providedIn: 'root'
})
export class AllJobsService {

  private devjobsUrl = 'http://localhost:3000/jobs'
  // private JobItems: Jobs[] = []

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.devjobsUrl)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message)
    } else {
      console.error(
        `Status code ${error.status} ` + 
        `body was: ${error.error}` 
      )
    }
    return throwError(()=> 
      'Something went wrong while fetching jobs data. Please try again later.'
    )
  }

  // getJobsById(id: string): Jobs | undefined {
  //   return this.JobItems.find((jobs) => jobs.id === id)
  // }
}