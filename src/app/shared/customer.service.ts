import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    orgao: new FormControl('', Validators.required),
    objeto: new FormControl('', Validators.required),
    prazo: new FormControl('', Validators.required)
  });


  getCustomers() {
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }


  insertCustomer(customer) {
    this.customerList.push({
      orgao: customer.orgao,
      objeto: customer.objeto,
      prazo: customer.prazo
    });
  }

  populateForm(customer) {
    this.form.setValue(customer);
  }

  updateCustomer(customer) {
    this.customerList.update(customer.$key,
      {
        orgao: customer.orgao,
        objeto: customer.objeto,
        prazo: customer.prazo
      });
  }

  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }

}
