import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { NgChartsModule } from 'ng2-charts';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CarAddComponent } from '../components/car-add/car-add.component';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { CarListComponent } from '../components/car-list/car-list.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    CarAddComponent,
    CarListComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
