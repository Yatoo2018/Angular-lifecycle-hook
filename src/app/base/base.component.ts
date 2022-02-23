import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Directive,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
// 使用Directive的好处
// Angular组件继承不会继承元数据，可以使用directive装饰器元数据可配置空来避免配置多余的元数据
// Directive是Component装饰器的基类，基本无缝替换
@Directive()
export class BaseComponent
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
  subject = window['subject'];
  constructor() {
    this.subject.next({
      type: 'constructor exec',
      content: 'BaseComponent class instance',
    });
  }
  _name: string = '';
  @Input() set name(n: string) {
    this.subject.next({
      type: '@input',
      content: 'set base name update',
    });
    this._name = n;
  }
  get name() {
    // 非必要不定义getter，访问次数非常多
    this.subject.next({
      type: 'tpl binding variable get',
      content: 'get name update',
    });
    return this._name;
  }
  ngOnChanges() {
    this.subject.next({
      type: 'lifecycle',
      content: 'BaseComponent ngOnChanges',
    });
  }

  ngOnInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'BaseComponent ngOnInit',
    });
  }

  ngDoCheck() {
    this.subject.next({
      type: 'lifecycle',
      content: 'BaseComponent ngDoCheck',
    });
  }

  ngAfterContentInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'BaseComponent ngAfterContentInit',
    });
  }

  ngAfterContentChecked() {
    this.subject.next({
      type: 'lifecycle',
      content: 'BaseComponent ngAfterContentChecked',
    });
  }

  ngAfterViewInit() {
    this.subject.next({
      type: 'lifecycle',
      content: 'BaseComponent ngAfterViewInit',
    });
  }

  ngAfterViewChecked() {
    this.subject.next({
      type: 'lifecycle',
      content: 'BaseComponent ngAfterViewChecked',
    });
  }

  ngOnDestroy() {
    this.subject.next({
      type: 'lifecycle',
      content: 'BaseComponent ngOnDestroy',
    });
  }
}
