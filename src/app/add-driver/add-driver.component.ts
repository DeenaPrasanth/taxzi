import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  driverForm: FormGroup = new FormGroup({});

  formSubmitted:boolean = false

  addDriverForm: FormGroup = new FormGroup({});
  
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  
      this.driverForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', Validators.required],
        country: ['', Validators.required],
        gender: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pincode: ['', Validators.required],
        driverImage: ['']
      });
    }

  }

//   loadForm() {

//     this.addDriverForm = this.fb.group({

//       'firstName': ['', Validators.required],
      
//       'lastName': ['', Validators.required],
      
//       'streetAddress1': ['', Validators.required],
      
//       'streetAddress2': ['', Validators.required],
      
//       'city': ['', Validators.required],
      
//       'country': ['', Validators.required],
      
//       'zipCode': ['', Validators.required],
      
//       'email': ['', Validators.required],
      
//       'mobileNumber': ['', Validators.required],
      
//       'gender': ['', Validators.required],
      
//       'uploadPhoto': ['', Validators.required],

//       'vehicleNumber': ['', Validators.required],

//       'vehicleType': ['', Validators.required],

//       'vehicleModal': ['', Validators.required],

//       'seatingCapacity': ['', Validators.required],

//       'TaxRenewalDate': ['', Validators.required],

//       'insuranceRenewalDate': ['', Validators.required],

//       'uploadVehicleDoc': ['', Validators.required],

//     });

// }

//   get f(): any { return this.addDriverForm.controls }

//   resetForm() {

//     this.addDriverForm.reset();

//     this.formSubmitted = false;

//   }


// submitForm() {

//   this.formSubmitted = true;

//   if (this.addDriverForm.invalid) return;

//   let payload = this.addDriverForm.getRawValue();


//   localStorage.setItem('session',JSON.stringify(payload))

//   // this.productsList.push(payload)

//   // this.resetForm();

//   console.log(payload);


// }



