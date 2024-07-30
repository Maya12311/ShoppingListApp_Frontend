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
    constructor(private fb: FormBuilder, private addProductService: AddProductService){}


    setValue(prio : string){
    console.log("worki?")
    console.log(prio ==="next month")
    console.log(this.priorities)
    if(prio ==="next month") {
      console.log("yes im here")
      this.priorities="nextMonth"
      console.log(this.priorities)
    } else if(prio === "next week"){
      this.priorities="nextWeek"
      console.log(this.priorities)

    }else{
      this.priorities=prio;
    
    }
  }

  ngOnInit(): void {
    console.log('now: ', _.now());

    this.registerForm = this.fb.group({
productName:   [this.name],
pieces: [''],
priority: [this.priorities],
shoppingLocation: [this.shoppingLocation],
todo: ['true'],
    })
  }

  setLocation(location: string){
    console.log(location, "this is the loc")

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
    console.log("whats up")
    console.log(this.name)
    console.log(this.selectedValue)

    console.log( this.registerForm.value)
this.errorMessage=null;
this.successMessage= null;
this.addProductService.sendData(this.registerForm.value)
.subscribe(
  (success)=> {this.successMessage = success.message},
  (error)=> {this.errorMessage= error.error.message}
)
  }

 

}
