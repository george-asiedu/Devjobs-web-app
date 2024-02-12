import { Component, OnInit } from '@angular/core';
import { Jobs } from '../../model/jobs';
import { AllJobsService } from '../../service/all-jobs.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {
  jobDetails: Jobs = {} as Jobs;
  loading: boolean = false
  error: string = ''

  constructor( private allJobService: AllJobsService, 
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param) => {
        let id: string | null = param.get('id')
        if(id !== null) {
          this.getJobDetails(id)
        }
      }
    )
  }

  getJobDetails(id: string) {
    this.loading = true;
    this.allJobService.getJobs().subscribe({
      next: (jobs) => {
        const job = jobs.find(job => job.id === id);
        if (job) {
          this.jobDetails = job;
        } else {
          this.error = 'Job not found';
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error
        this.loading = false
      }
    });
  }

  redirect(site: string) {
    window.location.href = site
  }

  extractDomainName(url: string): string {
    const domain = url.split('//')[1].split('/')[0];
    return domain;
  }
}
