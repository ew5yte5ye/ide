import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhpComponent } from '../php/php.component';
import { JavascriptComponent } from '../javascript/javascript.component';
import { PythonComponent } from '../python/python.component';

@Component({
  selector: 'app-ide',
  standalone: true,
  imports: [CommonModule, PhpComponent, JavascriptComponent, PythonComponent],
  templateUrl:'./ide.component.html',
  styleUrl: './ide.component.css'
})
export class IdeComponent {
  lang: 'php' | 'javascript' | 'python' = 'php';
}
