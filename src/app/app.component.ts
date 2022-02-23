import {
  VERSION,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Component,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
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
  name = 'Angular ' + VERSION.major;
  messages = [];
  subject = window['subject'];
  constructor() {
    this.subject.subscribe((item) => {
      this.messages.push(item);
    });
    this.subject.next({
      type: 'constructor exec',
      content: 'AppComponent class instance, 访问@input属性name=' + this.name,
    });
  }

  ngOnChanges() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngOnChanges, 访问@input属性name=' + this.name,
    });
  }

  ngOnInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngOnInit, 访问@input属性name=' + this.name,
    });
  }

  ngDoCheck() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngDoCheck, 访问@input属性name=' + this.name,
    });
  }

  ngAfterContentInit() {
    this.subject.next({
      type: 'lifecycle',
      content:
        'AppComponent ngAfterContentInit, 访问@input属性name=' + this.name,
    });
  }

  ngAfterContentChecked() {
    this.subject.next({
      type: 'lifecycle',
      content:
        'AppComponent ngAfterContentChecked, 访问@input属性name=' + this.name,
    });
  }

  ngAfterViewInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngAfterViewInit, 访问@input属性name=' + this.name,
    });
  }

  ngAfterViewChecked() {
    this.subject.next({
      type: 'lifecycle',
      content:
        'AppComponent ngAfterViewChecked, 访问@input属性name=' + this.name,
    });
  }

  ngOnDestroy() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngOnDestroy, 访问@input属性name=' + this.name,
    });
  }
}
