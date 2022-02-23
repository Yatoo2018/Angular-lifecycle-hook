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
      content: 'AppComponent class instance',
    });
  }

  ngOnChanges() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngOnChanges',
    });
  }

  ngOnInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngOnInit',
    });
  }

  ngDoCheck() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngDoCheck',
    });
  }

  ngAfterContentInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngAfterContentInit',
    });
  }

  ngAfterContentChecked() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngAfterContentChecked',
    });
  }

  ngAfterViewInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngAfterViewInit',
    });
  }

  ngAfterViewChecked() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngAfterViewChecked',
    });
  }

  ngOnDestroy() {
    this.subject.next({
      type: 'lifecycle',
      content: 'AppComponent ngOnDestroy',
    });
  }
}
