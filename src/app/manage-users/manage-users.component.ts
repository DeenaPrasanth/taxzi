import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  showCardBody = false;

  toggleCardBody() {
    this.showCardBody = !this.showCardBody;
  }

  selectedUser: any;

setSelectedUser(user: any) {
  this.selectedUser = user;
}

  filterValue = '';
  currentPage = 1;
  pageSize = 5; // Number of users per page

  // Replace this with your actual user data
  activeUsers = [
    // Dummy data
    { serialNo: 1, details: 'User 1', wallets: 'Wallet 1', ratings: 4.5 },
    { serialNo: 2, details: 'User 2', wallets: 'Wallet 2', ratings: 3.2 },
    { serialNo: 3, details: 'User 3', wallets: 'Wallet 3', ratings: 4.7 },
    { serialNo: 4, details: 'User 4', wallets: 'Wallet 4', ratings: 2.9 },
    { serialNo: 5, details: 'User 5', wallets: 'Wallet 5', ratings: 3.8 },
    { serialNo: 6, details: 'User 6', wallets: 'Wallet 6', ratings: 4.1 },
    // Add more users here...
  ];
  totalPages: number | undefined;

  get filteredUsers(): any[] {
    // Apply filtering based on the filterValue
    const filtered = this.activeUsers.filter(user => {
      return user.details.toLowerCase().includes(this.filterValue.toLowerCase());
    });

    // Calculate pagination
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    // Set totalPages based on the filtered user count and page size
    const totalPages = Math.ceil(filtered.length / this.pageSize);
    this.totalPages = totalPages;

    // Return the paginated results
    return filtered.slice(startIndex, endIndex);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    const totalPages = Math.ceil(this.filteredUsers.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
