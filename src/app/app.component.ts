import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  backgroundToggle = false;

  currentStyles = {     
    'backgraund':  this.backgroundToggle  ? 'red' : 'blue'  
  };
}
