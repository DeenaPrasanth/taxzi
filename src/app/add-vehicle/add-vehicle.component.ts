import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicleForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initVehicleForm();
  }

  initVehicleForm() {
    this.vehicleForm = this.formBuilder.group({
      vehicleNumber: ['', Validators.required],
      vehicleType: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      seatingCapacity: ['', Validators.required],
      pricePerKm: ['', Validators.required],
      pricePerMin: ['', Validators.required],
      minimumFare: ['', Validators.required],
      commission: ['', Validators.required],
      passengerCancellationTime: ['', Validators.required],
      passengerCancellationCharge: ['', Validators.required],
      insuranceRenewalDate: ['', Validators.required],
      vehiclePhoto: ['']
    });
  }

  onSubmit() {
    if (this.vehicleForm.invalid) {
      return;
    }

    // Perform form submission logic here
    console.log(this.vehicleForm.value);
  }

}
