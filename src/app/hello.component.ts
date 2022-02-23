import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BaseComponent } from './base/base.component';

@Component({
  selector: 'hello',
  template: `<h1>Hi, {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent
  extends BaseComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  messages = [];
  constructor() {
    super();
    this.subject.next({
      type: 'constructor exec',
      content: 'class instance, 访问@input属性name=' + this.name,
    });
  }

  ngOnChanges() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngOnChanges, 访问@input属性name=' + this.name,
    });
  }

  ngOnInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngOnInit, 访问@input属性name=' + this.name,
    });
  }

  ngDoCheck() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngDoCheck, 访问@input属性name=' + this.name,
    });
  }

  ngAfterContentInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngAfterContentInit, 访问@input属性name=' + this.name,
    });
  }

  ngAfterContentChecked() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngAfterContentChecked, 访问@input属性name=' + this.name,
    });
  }

  ngAfterViewInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngAfterViewInit, 访问@input属性name=' + this.name,
    });
  }

  ngAfterViewChecked() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngAfterViewChecked, 访问@input属性name=' + this.name,
    });
  }

  ngOnDestroy() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngOnDestroy, 访问@input属性name=' + this.name,
    });
  }
}
