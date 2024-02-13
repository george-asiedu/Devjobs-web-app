import { Component, OnInit } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { JobsComponent } from '../../components/jobs/jobs.component';
import { Jobs } from '../../model/jobs';
import { AllJobsService } from '../../service/all-jobs.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterComponent, JobsComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  jobs: Jobs[] = []
  loading: boolean = true
  error: string = ''
  filteredJobs: Jobs[] = [];

  constructor (private allJobsService: AllJobsService) {}

  ngOnInit(): void {
    this.allJobsService.getJobs().subscribe(
      (job) => {
        this.jobs = job
        this.loading = false
        this.filteredJobs = job
      }
    ), 
    ((err: string) => {
      this.error = err
      this.loading = false
    })
  }
}
