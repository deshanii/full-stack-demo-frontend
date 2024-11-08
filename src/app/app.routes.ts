import { Routes } from '@angular/router';
import { AddCustomerPageComponent } from './pages/add-customer-page/add-customer-page.component';
import { ManageCustomerComponent } from './pages/manage-customer/manage-customer.component';

export const routes: Routes = [
    {
        path : "add-customer",
        component: AddCustomerPageComponent
    },
    {
        path: "manage-customer",
        component: ManageCustomerComponent
    }
];
