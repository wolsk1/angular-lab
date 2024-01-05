import { Component } from '@angular/core';
import { CustomElementDirective } from './custom-element.directive';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomElementDirective]
})
export class AppComponent {
  title = 'angular-lab';
}
