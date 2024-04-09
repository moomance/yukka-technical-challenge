import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [], // list of components, directives, and pipes that are used in the template
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {

   // Component Properties 
   events: any  = [] // Stores events data 
   // Use 'this.' to access its properties in methods. example: this.events
   
   constructor (private http: HttpClient) {};
   
   ngOnInit(): void {
     // Initialization logic goes here
   }
 
   // method to fetch events data: (path to json file: ('../../../assets/data/events.json'))
   getEvents () {}

}