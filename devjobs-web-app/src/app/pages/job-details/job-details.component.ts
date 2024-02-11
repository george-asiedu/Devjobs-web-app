import { Component, OnInit } from '@angular/core';
import { Jobs } from '../../model/jobs';
import { AllJobsService } from '../../service/all-jobs.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {
  jobDetails: Jobs = {} as Jobs;

  constructor( private allJobService: AllJobsService) {}

  ngOnInit(): void {
    const jobId = '1'
    this.allJobService.getJobDetails(jobId)
      .subscribe(
        (jobDetail) => {
          console.log(jobDetail);
          
          this.jobDetails = jobDetail
        }
      )
  }
}
