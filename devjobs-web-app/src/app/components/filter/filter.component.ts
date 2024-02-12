import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Output() 
  filterChange: EventEmitter<any> = new EventEmitter<any>();

  isChecked = false;
  filterTitle = '';
  filterLocation = '';

  onChangeIsChecked() {
    this.isChecked = !this.isChecked;
  }

  onSearch() {
    const filters = {
      title: this.filterTitle,
      location: this.filterLocation,
      fullTime: this.isChecked
    };
    this.filterChange.emit(filters);
  }
}