import { Component, Input, TemplateRef } from '@angular/core';
import { DefaultPageHeaderComponent } from "./header/default-page-header/default-page-header.component";
import { DefaultFooterComponent } from "./footer/default-footer/default-footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tbl-navbar-overlap-shell',
  standalone: true,
  template: `

<div class="page">
  <!-- Navbar -->
  <!-- <lib-top-header></lib-top-header> -->
  <!-- <lib-menu-header></lib-menu-header> -->
  <ng-container *ngIf="menu">
    <ng-content *ngTemplateOutlet="menu">
    </ng-content>
  </ng-container>
  <ng-container *ngIf="!menu">
    <header tbl-default-menu></header>
  </ng-container>
  <div class="page-wrapper">
    <!-- Page header -->
    <ng-container *ngIf="header">
      <ng-content *ngTemplateOutlet="header">
      </ng-content>
    </ng-container>
    <ng-container *ngIf="!header">
      <tbl-default-page-header/>
    </ng-container>
    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <ng-container *ngIf="body"><ng-content *ngTemplateOutlet="body"></ng-content></ng-container>
        </div>
      </div>
    </div>
    <ng-container *ngIf="footer">
      <ng-content *ngTemplateOutlet="footer">
      </ng-content>
    </ng-container>
    <ng-container *ngIf="!footer">
      <tbl-default-footer/>
    </ng-container>
  </div>
</div>


  `,
  styles: [``],
  imports: [
    CommonModule,
    DefaultPageHeaderComponent,
    DefaultFooterComponent
  ]
})
export class NavbarOverlapShellComponent {
  @Input() public menu?: TemplateRef<any> | null = null;
  @Input() public header?: TemplateRef<any> | null = null;
  @Input() public body?: TemplateRef<any> | null = null;
  @Input() public footer?: TemplateRef<any> | null = null;
}
