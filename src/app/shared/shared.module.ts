import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const bootstrapModules = [
  AlertModule.forRoot(),
  BsDropdownModule.forRoot(),
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...bootstrapModules
  ],
  exports: [
    bootstrapModules
  ]
})
export class SharedModule { }
