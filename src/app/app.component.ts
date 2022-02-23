import {
  VERSION,
  Component,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
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
}