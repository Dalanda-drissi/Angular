import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length=0;
  includeLettres = false;
  includeNumbers = false;
  includeSymbols = false;
  password= '';

  onChangeLength(value: string){

   const parseValue = parseInt(value);
   if(!isNaN(parseValue)){
     this.length = parseValue;
   }

  }


  onChangeUseLettres(){
   this.includeLettres=!this.includeLettres;
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
   }
   onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
   }
  onButtonClick(){
  const numbers ='0123456789';
  const lettres = 'abcdegjhijklmnopqrstuvwxyz';
  const sybols = '!@#$%^&*()';
  let validChars = '';
  if (this.includeLettres){
    validChars+=lettres;
  }
  if (this.includeNumbers){
    validChars += numbers;
  }
  if (this.includeSymbols){
    validChars+= sybols;
  }
  let generatedPassword = '';
  for (let i = 0; i< this.length; i++){
   const index = Math.floor(Math.random()*validChars.length);
   generatedPassword += validChars[index];
  }
  this.password = generatedPassword;
  }
 
}
