import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject, switchMap, interval, Subscription, map, share } from 'rxjs';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 constructor(private router: Router){}
 
 ngOnInit(): void {
//  this.router.navigate(['home']);
 } 

}


