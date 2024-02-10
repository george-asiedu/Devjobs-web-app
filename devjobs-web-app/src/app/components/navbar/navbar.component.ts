import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isDark = false;

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('theme');
    this.isDark = storedTheme === 'dark';
    document.body.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }

  themeSwitcher() {
    this.isDark = !this.isDark;
    document.body.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }
  
}
