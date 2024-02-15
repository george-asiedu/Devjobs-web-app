import { Component, OnInit } from '@angular/core';
import { Jobs } from '../../model/jobs';
import { AllJobsService } from '../../service/all-jobs.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  jobs: Jobs[] = []
  loading: boolean = true
  error: string = ''
  filteredJobs: Jobs[] = [];
  filterTitle: string = ''
  filterLocation: string = ''
  fillterFullTime: boolean = false

  constructor (public allJobsService: AllJobsService) {}

  ngOnInit(): void {
    this.allJobsService.getJobs().subscribe(
      (job) => {
        this.jobs = job
        this.loading = false
        this.filteredJobs = job
      }
    ), 
    ((err: any) => {
      this.error = err
      this.loading = false
    })
  }

  filterJobs(): void {
    this.filteredJobs = this.jobs.filter(job => {
      const titleMatch = job.position.toLowerCase().includes(this.filterTitle.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(this.filterLocation.toLowerCase());
      const fullTimeMatch = !this.fillterFullTime || job.contract.toLowerCase() === 'full time';
      return titleMatch && locationMatch && fullTimeMatch;
    })
  }

  applyFilters(filters: { location: string, fullTime: boolean}): void {
    this.filterLocation = filters.location
    this.fillterFullTime = filters.fullTime
    this.filterJobs()
  }
}