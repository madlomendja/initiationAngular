import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user = "Madeleine";

  elements =[1, 2, 3, 4];

  date = new Date();

  constructor() { }

  ngOnInit() {
  }

  userclick(){
    console.log("clicked");
  }

}
