import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  model = {
    name: '',
    phone: '',
    email: '',
    rating:0,
    message: ''
  };
  success = false;
  error = false;

  constructor(private feedbackService: MainService) {}

  submit() {
    this.success=false;
    this.error=false;
    this.feedbackService.submitFeedback(this.model).subscribe({
      next: () => {
        this.success = true;
        this.model = { name: '', phone: '', email: '',rating:0, message: '' };
      },
      error: (err) => {
        console.error(err);
        this.error = true;
      }
    });
  }
  resetForm(){
    this.success=false;
    this.error=false;
    this.model = { name: '', phone: '', email: '',rating:0, message: '' };
  }
 
}
