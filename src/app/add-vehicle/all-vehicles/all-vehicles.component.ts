import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.css']
})
export class AllVehiclesComponent implements OnInit {
 // drivers: any; // Define a property to store the parsed data
  // constructor(private router: Router) { }

  // ngOnInit(): void {
  //   this.getLocalstorageData();
    
  // }

  // getLocalstorageData() {
  //   let storedData = localStorage.getItem('session');
  //   if (storedData) {
  //     // Parse the stored data from JSON
  //     this.drivers = JSON.parse(storedData);
  //   }
  // }

  // goToAddDriver() {
  //   this.router.navigate(['/add-driver']); 
  // }

  drivers: any[] | undefined; // Your drivers data array
  filteredDrivers: any[] | undefined;
  filterText: string | undefined;
  currentPage: number | undefined ;
  pageSize: number | undefined;
  totalPages: number | undefined;
  pages: number[] | undefined;

  ngOnInit() {
    // Initialize data
    this.drivers = []; // Populate with your drivers data
    this.filterText = '';
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = Math.ceil(this.drivers.length / this.pageSize);
  }

  // updateFilteredDrivers() {
  //   // Apply filter
  //   this.filteredDrivers = this.drivers.filter(driver =>
  //     (driver.firstName + ' ' + driver.lastName).toLowerCase().includes(this.filterText.toLowerCase())
  //   );

    // Update pagination
    // this.totalPages = Math.ceil(this.filteredDrivers.length / this.pageSize);
    // this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    // // Adjust current page if needed
    // if (this.currentPage > this.totalPages) {
    //   this.currentPage = this.totalPages;
    // }
  }

  // applyFilter() {
  //   this.currentPage = 1;
  //   this.updateFilteredDrivers();
  // }

  // clearFilter() {
  //   this.filterText = '';
  //   this.applyFilter();
  // }

  // goToPage(page: number) {
  //   if (page >= 1 && page <= this.totalPages) {
  //     this.currentPage = page;
  //   }
  // }


