import { Component } from '@angular/core';

@Component({
  selector: 'tbl-messages-dropdown',
  standalone: false,
  templateUrl: './messages-dropdown.component.html',
  styleUrls: ['./messages-dropdown.component.css'],
  host: { 'class': 'd-none d-md-flex' }
})
export class MessagesDropdownComponent {

}
