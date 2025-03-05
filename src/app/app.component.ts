import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello From BridgeLabz';
  imgUrl="../assests/images/download.png";
  url="https://www.bridgelabz.com";
  userName : string ="Suraj";

  onClick(){
    console.log("Save Button is Clicked : ");
    window.open(this.url,"_blank")

   }
}
