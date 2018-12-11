import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'cadastro', component: CustomerComponent },
    { path: 'lista', component: CustomerListComponent },
    { path: '', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [CustomerComponent, CustomerListComponent, LoginComponent]