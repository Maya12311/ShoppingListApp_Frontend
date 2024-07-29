import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddProductService } from './add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  registerForm!: FormGroup; 
  submitted:boolean= false;

  errorMessage: any;
  successMessage: any; 

  constructor(private fb: FormBuilder, private addProductService: AddProductService){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
productName:   [''],
pieces: [''],
priority: [''],
shoppingLocation: [''],
todo: ['true']
    })
  }

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
