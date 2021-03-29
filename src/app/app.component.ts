import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>FIZZBUZZ</h1>
  <br>
  <button (click)="increment()">Increment</button>
  <div>{{ output }}</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fizz-buzz';
  count = 0;
  output = "";

  //Inrement function (produces string output from fizzbuzz count)
  increment() {
    this.count++;
  
    //If past 20, loop back to 1 to start again
    if(this.count == 21){
      this.count = 1;
    }

    //If div by 3 & 5 - FizzBuzz!
    if(this.count % 3 == 0 && this.count % 5 == 0)
    {
      this.output = "FizzBuzz!";
    }
    //If div by 3 - Fizz
    else if (this.count % 3 == 0)
    {
      this.output = "Fizz"
    }
    //If div by 5 - Buzz
    else if (this.count % 5 == 0)
    {
      this.output = "Buzz"
    }
    //Else simply print the num
    else 
    {
      this.output = this.count.toString();
    }

  }
}
