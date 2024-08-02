import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddProductService } from './add-product.service';
import { compileNgModule } from '@angular/compiler';
import * as _ from 'underscore';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  submitted:boolean= false;
name:string=""; 
selectedValue: any;
  errorMessage: any="";
  successMessage: any= ""; 
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
this.registerForm.get('productName')?.valueChanges.subscribe(sub => this.submitted=false )
  }


  registerForm = this.fb.group({
    productName:   [this.name, Validators.required],
    amount: [''],
    gramMl: [''],
    priority: [this.priorities, Validators.required],
    shoppingLocation: [this.shoppingLocation, Validators.required],
    alarmDate: [this.date],
    
    todo: ['true'],
    
        })

  setLocation(location: string){
  this.shoppingLocation=location;
  }

  priority = [
    {id: "🚨", name: "today", springName: "today", index: 1},
    {id: "🫡", name: "next week", springName: "nextWeek", index: 2},
    {id: "👍", name: "next month", springName: "nextMonth" , index: 3},
    {id: "🏝️", name: "sometime", springName: "sometime" , index: 4},
 ];

 shoppingLocations = [
  {id: "🛒", name: "supermarket"},
  {id: "💊", name: "drugstore"},
  {id: "💻", name: "online"}
 ]
  
 startToFillOut(){
  this.submitted=false;
 }

  submit(){
    console.log(this.registerForm.valid)
    console.log(this.registerForm.value)
    this.submitted= true;

    console.log("success before", this.successMessage)
this.errorMessage=null;
this.successMessage= null;
this.addProductService.sendData(this.registerForm.value).subscribe
(
  (success)=> {console.log("is this workin")} ,
  (error)=> {this.errorMessage= error.error.message}
)
 

if(this.registerForm.valid) {
  this.registerForm.reset(); 
  this.successMessage= "Product successfully added"
}

if(this.successMessage===null){

  this.errorMessage="The product could not be added. Please check the error messages"
}



  }

 

}
