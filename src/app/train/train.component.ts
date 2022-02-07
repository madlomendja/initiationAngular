import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  constructor(private http:HttpClient) { }

  trainData: any;  

  ngOnInit() {
    this.http.get('//transport.opendata.ch/v1/connections?from=Lausanne&to=Genève') .subscribe(
      (value) => this.trainData = value
    )
  }

}
