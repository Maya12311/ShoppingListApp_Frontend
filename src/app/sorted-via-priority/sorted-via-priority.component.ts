import { NextWeekService } from './Service/next-week.service';
import { Product } from './../all-products/product';
import { any } from 'underscore';
import { Component } from '@angular/core';
import { TodayService } from './Service/today.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sorted-via-priority',
  templateUrl: './sorted-via-priority.component.html',
  styleUrls: ['./sorted-via-priority.component.css']
})
export class SortedViaPriorityComponent {

  public products?: Product[];


  constructor(private todayService: TodayService, private nextWeekService: NextWeekService){}

  checkboxes= {
    today: false,
    nextWeek: false,
    nextMonth: false,
    sometime: false
  }


  choosePriority(priority: string){
    console.log(priority);

if(priority == "today"){
  console.log("it is");
  this.todayService.priority= priority;

  this.checkboxes.today=!this.checkboxes.today;
  this.findByPriorityToday();
} else if(priority =="nextWeek"){
  console.log("im in nextWeek");

  this.checkboxes.nextWeek = !this.checkboxes.nextWeek;
  this.nextWeekService.priority= priority;

this.findByPriorityNextWeek();
} else if(priority =="nextMonth"){
  this.checkboxes.nextMonth = !this.checkboxes.nextMonth;
  this.todayService.priority= priority;



}
  }


  public findByPriorityToday(): void {
    this.todayService.findByPriority().subscribe(
      (response: Product[]) => {

        this.products=response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public findByPriorityNextWeek(): void {
    this.nextWeekService.findByPriority().subscribe(
      (response: Product[]) => {

        this.products=response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }


}
