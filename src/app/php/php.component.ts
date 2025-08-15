import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoderunnerService } from '../coderunner.service';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-php-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './php.component.html',
  styleUrl: './php.component.css'
})
export class PhpComponent {
  code = '';
  output = '';
  errorMessage: string | null = null;
  constructor(private runner: CoderunnerService) {}

  runCode() {
    this.output = ""; this.errorMessage = "";
    this.runner.execute('php', this.code).subscribe({
    next: (res: any) => {
      if(res.error){
        this.errorMessage = res.error;
      }else{
        this.output = res.output;
      }      
    },
    error: (err) => {
      this.errorMessage = 'Failed to run code. Please try again later.';
      console.error('Something went wrong', err);
    }
  });
  }
}
