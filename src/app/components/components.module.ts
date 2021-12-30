import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
