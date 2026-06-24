import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  count = 0;
  showAlert() {
    alert('Hello, Welcome to Angular by Ajay - CodeLab!');
  }

  counter(action: string) {
    if (action === 'minus') {
     this.count > 0 && this.count--;
    } else if (action === 'plus') {
      this.count++;
    }
    // this.showUserName(); // call a function from another function
  }

  showUserName(){
    alert("Hello!");
  }
}
