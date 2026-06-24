import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Child } from "../child/child";
import { ChildModel } from '../../shared/models/child.models';
import { ChildAddress } from '../../shared/components/child-address/child-address';

@Component({
  selector: 'app-parent',
  imports: [Child, ChildAddress],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @ViewChild('btnCounter') btnCounter!: ElementRef;
  @ViewChild(Child) childComponent!: Child;

  public count: number = 0;
  public test: boolean = false;
  public address: string = 'India';
  public objChildModel: ChildModel = { id: 10, name: 'ajay gangwar' };

  private time : any;
  constructor() {
    // console.log('Hello from parent - constructor()');
  }
  ngOnDestroy(): void {
    clearInterval(this.time);
    console.log('Parent component destroy');
  }
  ngAfterViewChecked(): void {
    // console.log(this.btnCounter.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log(this.btnCounter);
    this.btnCounter.nativeElement.innerHTML = 'Button text updated';
  }
  ngOnInit(): void {
    console.log('Hello from parent - ngOnInit()');
    this.timer();
  }
  counter(): void {
    this.count++;
    this.test = !this.test;
    this.objChildModel.id = this.count++;
    // this.objChildModel = { id: this.count++, name: 'Ajme Bee' };
    this.address = this.address + this.count;
  }

  timer(): void{
   this.time = setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}
