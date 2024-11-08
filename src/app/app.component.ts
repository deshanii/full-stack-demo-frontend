import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AddCustomerPageComponent } from './pages/add-customer-page/add-customer-page.component';
import { ManageCustomerComponent } from './pages/manage-customer/manage-customer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,AddCustomerPageComponent,ManageCustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CM';
}
