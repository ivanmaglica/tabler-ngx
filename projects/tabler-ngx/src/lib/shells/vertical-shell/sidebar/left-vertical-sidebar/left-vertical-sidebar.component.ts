import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tbl-left-vertical-sidebar',
  templateUrl: './left-vertical-sidebar.component.html',
  styleUrls: ['./left-vertical-sidebar.component.css']
})
export class LeftVerticalSidebarComponent implements OnInit {
  @Input() public logoUrl?: string = ""; // ./assets/static/logo-white.svg
  @Input() public menu?: IMenu[];


  ngOnInit() {
    console.log("INIT", this.menu)
  }


  onMenuItemClick(menuItem: IMenu) {
    console.log("onMenuItemclick", menuItem)
    if (!menuItem || !menuItem.action) {
      return;
    }
    menuItem.action();
  }

}


export interface IMenu {
  label: string;
  icon: string;
  badge?: IBadge;
  active?: boolean;
  link?: string;
  action?: any;
  submenu?: IMenu[];
}

export interface IBadge {
  classNames?: string;
  label: string;
}