import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation - One Way Binding > TS to HTML (Output Data)
  appName = 'DotNet By Ajay';
  user = { firstName: 'Ajay' }

  // Property Binding - One Way Binding > TS to HTML (Output Data)
  imageUrl = 'https://angular.dev/media/angular-logo-light-A36B7RRE.svg';
  imageUrl1 = '/Users/seajaygangwar/Downloads/DotNetByAjay/AngularByAjay.CodeLab/public/angular-icon';
  imageRelativeUrl = '/angular-icon.png';

  //Event Binding - One Way Binding > HTML to TS (Input Data)
  showMessage() {
    alert('Button clicked!')
  }

  // Two way binding
  userName: string = "Hello";
}
