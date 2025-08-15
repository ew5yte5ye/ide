import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoderunnerService } from '../coderunner.service';

@Component({
  selector: 'app-javascript-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css'
})
export class JavascriptComponent {
  code = '';
  output = '';
  errorMessage: string | null = null;
  constructor(private runner: CoderunnerService) {}

  runCode() {
    this.output = ""; this.errorMessage = "";
    this.runner.execute('javascript', this.code).subscribe({
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
