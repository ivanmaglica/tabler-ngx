import { Component } from '@angular/core';

@Component({
  selector: '[tbl-four-deck]',
  standalone: false,
  templateUrl: './four-deck.component.html',
  styleUrls: ['./four-deck.component.css'],
  host: {
    class: "row row-deck row-cards"
  }
})
export class FourDeckComponent {

}
