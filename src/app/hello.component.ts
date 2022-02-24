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

@Component({
  selector: 'hello',
  template: `<h1>Hello, {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent
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
  @Input() name;
  subject = window['subject'];
  constructor() {
    this.subject.next({
      type: 'constructor exec',
      content: 'class instance',
    });
  }

  ngOnChanges() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngOnChanges',
    });
  }

  ngOnInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngOnInit',
    });
  }

  ngDoCheck() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngDoCheck',
    });
  }

  ngAfterContentInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngAfterContentInit',
    });
  }

  ngAfterContentChecked() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngAfterContentChecked',
    });
  }

  ngAfterViewInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngAfterViewInit',
    });
  }

  ngAfterViewChecked() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngAfterViewChecked',
    });
  }

  ngOnDestroy() {
    this.subject.next({
      type: 'lifecycle',
      content: 'ngOnDestroy',
    });
  }
}
