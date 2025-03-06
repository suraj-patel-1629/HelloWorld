import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello From BridgeLabz';
  imgUrl="../assests/images/download.png";
  url="https://www.bridgelabz.com";
  userName : string ="";
  nameError:string="";

  onClick(){
    console.log("Save Button is Clicked : ");
    window.open(this.url,"_blank")

   }
   onInput(): void{
    console.log("change Event Occured!");
    const nameRegex=RegExp(`^[A-Z]{1}[a-zA-Z\\s]{2,}$`);
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    
   }
}
