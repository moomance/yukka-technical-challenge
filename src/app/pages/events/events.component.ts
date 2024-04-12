import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor], 
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {

  events: any  = []

  constructor (private http: HttpClient) {};

  ngOnInit(): void {
    this.getEvents();
  }


  getEvents () {
    this.http.get<any[]>('../../../assets/data/events.json').subscribe(data => {

	  console.log(this.events)
    //here return data 
  
    }, error =>  {
      console.log('could not load, error')
    })

  }

  // create sorting function here 

  // create filtering function here  

}
