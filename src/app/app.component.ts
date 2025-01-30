import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RelicsListComponent } from './components/relics-list/relics-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RelicsListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reliquias-app';
}
