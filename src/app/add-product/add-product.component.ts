import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddProductService } from './add-product.service';
import { compileNgModule } from '@angular/compiler';
import * as _ from 'underscore';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  registerForm!: FormGroup; 
  submitted:boolean= false;
name:string=""; 
selectedValue: any;
  errorMessage: any;
  successMessage: any; 
  priorities!:string;
  shoppingLocation:string=""
date:Date = new Date(); 

    constructor(private fb: FormBuilder, private addProductService: AddProductService){}


    setValue(prio : string){
    if(prio ==="next month") {
      this.priorities="nextMonth"
    } else if(prio === "next week"){
      this.priorities="nextWeek"
    }else{
      this.priorities=prio;
    
    }
  }

  ngOnInit(): void {
    console.log('now: ', _.now());

    this.registerForm = this.fb.group({
productName:   [this.name],
amount: [''],
gramMl: [''],
priority: [this.priorities],
shoppingLocation: [this.shoppingLocation],
alarmDate: [this.date],

todo: ['true'],

    })
  }

  setLocation(location: string){
  this.shoppingLocation=location;
  }

  priority = [
    {id: "🚨", name: "today", springName: "today"},
    {id: "🫡", name: "next week", springName: "nextWeek"},
    {id: "👍", name: "next month", springName: "nextMonth"},
    {id: "🏝️", name: "sometime", springName: "sometime"},
 ];

 shoppingLocations = [
  {id: "🛒", name: "supermarket"},
  {id: "💊", name: "drugstore"},
  {id: "💻", name: "online"}
 ]
  

  submit(){
this.errorMessage=null;
this.successMessage= null;
this.addProductService.sendData(this.registerForm.value)
.subscribe(
  (success)=> {this.successMessage = success.message},
  (error)=> {this.errorMessage= error.error.message}
)
  }

 

}
