import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CreateCompanyComponent } from './pages/create-company/create-company.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    WelcomeComponent,
    BreadcrumbComponent,
    CreateCompanyComponent,
  ],
  imports: [CommonModule, CoreRoutingModule],
  exports: [SidebarComponent, NavbarComponent],
})
export class CoreModule {}
