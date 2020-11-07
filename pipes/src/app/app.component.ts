import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name : string;
  date : Date;
  Amount : string ;
  height:number;
  car ={
    make : 'toyota',
    model :'camry',
    year : 2000
  };
miles:number;
onMilesChange(value: string){
  this.miles = parseFloat(value);
}
  onNameChange( value :string){
  this.name = value;
  }
  onDateChange( value :Date){
    this.date = value;
    }

  onAmountChange( value :string){
      this.Amount = value;
   }  
 onheightChange( value :number){
    this.height = value;
 }
}
