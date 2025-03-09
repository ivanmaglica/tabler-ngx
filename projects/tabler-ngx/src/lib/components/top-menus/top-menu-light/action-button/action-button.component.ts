import { Component } from '@angular/core';

@Component({
  selector: 'tbl-action-button',
  standalone: false,
  template: `

<a class="btn" target="_blank" rel="noreferrer">
  <ng-content></ng-content>
</a>

  `,
  styles: [``]
})
export class ActionButtonComponent {

}
