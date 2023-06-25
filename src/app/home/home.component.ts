import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/Contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  contacts: Contact[] = [
    new Contact('John Doe', '1234567890', 'john@example.com', new Date()),
    new Contact('Jane Smith', '9876543210', 'jane@example.com', new Date()),
    // Add more dummy contacts as needed
  ];

  editContact(contact: Contact) {
    // Implement the edit functionality as needed
    console.log('Edit contact:', contact);
  }

  deleteContact(contact: Contact) {
    // Implement the delete functionality as needed
    console.log('Delete contact:', contact);
    this.contacts = this.contacts.filter((c) => c !== contact);
  }
}
