import { NextMonthService } from './Service/next-month.service';
import { NextWeekService } from './Service/next-week.service';
import { Product } from './../all-products/product';
import { any } from 'underscore';
import { Component } from '@angular/core';
import { TodayService } from './Service/today.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SometimeService } from './Service/sometime.service';

@Component({
  selector: 'app-sorted-via-priority',
  templateUrl: './sorted-via-priority.component.html',
  styleUrls: ['./sorted-via-priority.component.css']
})
export class SortedViaPriorityComponent {

  public productsToday?: Product[];
public productsNextWeek?: Product[];
public productsNextMonth?: Product[];
public productsSometime?: Product[];

  constructor(private todayService: TodayService, private nextWeekService: NextWeekService, private nextMonthService: NextMonthService, private sometime: SometimeService ){}

  checkboxes= {
    today: false,
    nextWeek: false,
    nextMonth: false,
    sometime: false
  }


  choosePriority(priority: string){
    console.log(priority);

if(priority == "today"){
  this.todayService.priority= priority;
  this.checkboxes.today=!this.checkboxes.today;
  this.findByPriorityToday();

} else if(priority =="nextWeek"){
  this.checkboxes.nextWeek = !this.checkboxes.nextWeek;
  this.nextWeekService.priority= priority;
  this.findByPriorityNextWeek();


} else if(priority =="nextMonth"){
  this.checkboxes.nextMonth = !this.checkboxes.nextMonth;
this.nextMonthService.priority=priority;
this.findByPriorityNextMonth();


} else if(priority == "sometime"){
  this.checkboxes.sometime = !this.checkboxes.sometime;
  this.sometime.priority = priority;
  this.findByPrioritySometime();
}
  }


  public findByPriorityToday(): void {
    this.todayService.findByPriority().subscribe(
      (response: Product[]) => {

        this.productsToday=response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public findByPriorityNextWeek(): void {
    this.nextWeekService.findByPriority().subscribe(
      (response: Product[]) => {

        this.productsNextWeek=response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public findByPriorityNextMonth(): void {
    this.nextMonthService.findByPriority().subscribe(
      (response: Product[]) => {

        this.productsNextMonth=response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public findByPrioritySometime(): void {
    this.sometime.findByPriority().subscribe(
      (response: Product[]) => {

        this.productsSometime=response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
