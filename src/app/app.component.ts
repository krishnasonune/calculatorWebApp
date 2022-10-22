import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  
  title = 'calculatorWebApp';
  val:string = "";

  tryial(){
    let buttons = (document.getElementsByClassName("btn btn-dark"));
   
    Array.from(buttons).forEach( (button) => {
      let btn = button as HTMLButtonElement;
      btn.addEventListener('click', () => {
        let input = (document?.getElementById("input") as HTMLInputElement);
          if(input != null){
            if(btn.innerHTML != "=" && btn.innerHTML != "C"){
              this.val += btn.innerHTML;
              input.value = this.val;
            }
            else if(btn.innerHTML == "="){
              if(eval(this.val) != null ){
                input.value = eval(this.val);
                this.val = "";
              }else{
                input.value="invalid"
              }
            }
            else{
              input.value = "";
              this.val = "";
            }
          }
      })
    })
  }

  ngOnInit(): void {
    this.tryial();
   
  }
}
