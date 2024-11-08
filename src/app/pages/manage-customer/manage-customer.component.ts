import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-customer',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './manage-customer.component.html',
  styleUrl: './manage-customer.component.css'
})
export class ManageCustomerComponent {

  public customerList: any=[];

  constructor(private http:HttpClient){
    this.loadTable();  
  }

  loadTable(){
    this.http.get("http://localhost:8080/customer/get-customer").subscribe(data=>{
      console.log(data);
      this.customerList=data;
      
    })
  }

  deleteCustomerById(id:any){
    console.log(id);

    this.http.delete(`http://localhost:8080/customer/delete-by-id/${id}`).subscribe(data=>{
      alert("customer deleted !!!!");
      this.loadTable();
    })
    
}
public customerTemp:any={}
updateCustomer(customer:any){
  console.log(customer);
  this.customerTemp=customer;
  
}

saveCustomer(){
  this.http.put("http://localhost:8080/customer/update-customer",this.customerTemp).subscribe(data=>{
    alert("customer Updated!!!!!")
  })
}



}
