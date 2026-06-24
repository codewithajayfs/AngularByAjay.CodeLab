import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChildModel } from '../../shared/models/child.models';
import { ChildAddress } from '../../shared/components/child-address/child-address';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
  @ContentChild(ChildAddress) childAddress!: ChildAddress;
  @Input() data!: number;
  @Input() data2!: boolean;
  @Input() childModel!: ChildModel;

  public childCounter: number = 0;

  constructor(){
    console.log('Hello from child - constructor()');
  }
  ngOnDestroy(): void {
    console.log('Child component destroy');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()' + this.childAddress?.address);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()' + this.childAddress?.address);
  }
  ngDoCheck(): void {
    // console.log(this.childModel);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngOnInit(){
    console.log('Hello from child - ngOnInit()');
  }

  increaseCounter(): void {
    this.childCounter++;
  }
}
