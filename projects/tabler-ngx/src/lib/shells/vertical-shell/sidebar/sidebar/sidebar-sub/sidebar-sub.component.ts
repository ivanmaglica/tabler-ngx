import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tbl-sidebar-sub',
  templateUrl: './sidebar-sub.component.html',
  styleUrls: ['./sidebar-sub.component.css'],
  host: {
    "[class]": "classes"
  }
})
export class SidebarSubComponent implements OnInit{
  classes = "nav-item dropdown";

  @Input()
  public opened: boolean = false;


  ngOnInit(): void {
    this.classes = `nav-item dropdown ${this.opened ? 'active': 'not-active'}`;
  }
}
