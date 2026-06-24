import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-address',
  imports: [],
  templateUrl: './child-address.html',
  styleUrl: './child-address.css',
})
export class ChildAddress {
  @Input() address!: string;
}
