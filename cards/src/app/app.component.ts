import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 posts = [
 {  
  imageurl : '../assets/tree.jpeg', 
  title :'Neat Tree',
  username: 'nature',
  content : 'i saw this neat tree today'
},
{  
  imageurl : '../assets/mountain.jpeg', 
  title :'Snowy Mountain',
  username: 'Mountain Lver',
  content : 'Here is a pecture of a snowy mountain'
},
{  
  imageurl : '../assets/biking.jpeg', 
  title :'Mountain biking ',
  username: 'biking12222',
  content : 'i did some biking today'
}

 ]
}
