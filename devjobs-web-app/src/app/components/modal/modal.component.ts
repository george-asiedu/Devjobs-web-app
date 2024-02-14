import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllJobsService } from '../../service/all-jobs.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  filterLocation: string = ''
  fillterFullTime: boolean = false
  showModal: boolean = false

  constructor(private allJobsService: AllJobsService) {}

  setModalOpen() {
    this.showModal = true
  }

  filterJobs() {
    
  }
}


// jobs: Jobs[] = []
//   loading: boolean = true
//   error: string = ''
//   filteredJobs: Jobs[] = [];
//   filterTitle: string = ''
//   filterLocation: string = ''
//   fillterFullTime: boolean = false
//   isChecked: boolean = false

//   constructor (private allJobsService: AllJobsService) {}

//   ngOnInit(): void {
//     this.allJobsService.getJobs().subscribe(
//       (job) => {
//         this.jobs = job
//         this.loading = false
//         this.filteredJobs = job
//       }
//     ), 
//     ((err: any) => {
//       this.error = err
//       this.loading = false
//     })
//   }

//   filterJobs(): void {
//     this.filteredJobs = this.jobs.filter(job => {
//       return job.position.toLowerCase().includes(this.filterTitle.toLowerCase()) && 
//             job.location.toLowerCase().includes(this.filterLocation.toLowerCase()) && 
//             (!this.fillterFullTime || job.contract.toLowerCase() === 'full time')
//     })
//   }