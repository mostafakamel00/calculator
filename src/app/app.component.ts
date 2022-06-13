import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculator';
  result = '00';
  getNums(item: any) {
    if (this.result == '00') {
      this.result = '';
    }
    this.result += item;
  }
  getEqual() {
    this.result = eval(this.result).toFixed(2);
  }
  getReset() {
    this.result = '00';
  }
}
