import { Component, OnInit } from '@angular/core';
import { Jobs } from '../../model/jobs';
import { AllJobsService } from '../../service/all-jobs.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  allJobs: Jobs[] = []

  constructor(private allJobsService: AllJobsService) {}

  ngOnInit(): void {
    this.allJobsService.getJobs().subscribe((jobs) => {
      console.log(jobs)
      this.allJobs = jobs
    })
  }
}
