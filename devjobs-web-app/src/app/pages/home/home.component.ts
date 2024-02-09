import { Component } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
