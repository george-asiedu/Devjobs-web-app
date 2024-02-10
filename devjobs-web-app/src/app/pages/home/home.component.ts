import { Component } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { JobsComponent } from '../../components/jobs/jobs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterComponent, JobsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
