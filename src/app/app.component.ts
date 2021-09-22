import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // toggle:any = false;

  // currentStyles = {     
  //   'backgraund':  this.backgroundToggle  ? 'red' : 'blue'  
  // };

  objs = [
    {title: "Asus 10", price: "10$", skills: [
      {color: "red"},
      {usb: "3.0"}
    ]},
  {title: "Iphone 10", price: "100$", skills: [
      {color: "gold"},
      {usb: "4.0"}
    ]
  },
]
}
