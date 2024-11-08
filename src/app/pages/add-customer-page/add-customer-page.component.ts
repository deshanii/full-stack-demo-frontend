import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-customer-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-customer-page.component.html',
  styleUrl: './add-customer-page.component.css'
})
export class AddCustomerPageComponent {

  public customer ={
    name : '',
    address : '',
    email : '',
  };
  constructor(private http:HttpClient){}

 

  public addCustomer(){
    console.log(this.customer);
    
    this.http.post("http://localhost:8080/customer/add-customer",this.customer).subscribe((data)=>{
        alert("Customer Added!!!!");
    })
  }


}
