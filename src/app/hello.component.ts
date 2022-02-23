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
  template: `<h1>Hi, {{name}}!</h1>`,
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
  _name: string = '';
  
  subject = window['subject'];
  @Input() set name(n: string) {
    this.subject.next({
      type: '@input',
      content: 'set name update',
    });
    this._name = n;
  }
  get name() {
    // 非必要不定义getter，访问次数非常多
    // this.messages.push({
    //   type: 'template binding variable get',
    //   content: 'get name update',
    // });
    return this._name;
  }
  messages = [];
  constructor() {
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
