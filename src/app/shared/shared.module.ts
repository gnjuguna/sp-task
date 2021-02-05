import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ApiService } from './services/api.service';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './modals/banner/banner.component';



const bootstrapModules = [
  ModalModule.forRoot(),
  CollapseModule.forRoot()
]
@NgModule({
  declarations: [HeaderComponent, FooterComponent, BannerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ...bootstrapModules
  ],
  exports: [
    bootstrapModules,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    ApiService,
    BsModalRef
  ],
  entryComponents: [
    BannerComponent
  ]
})
export class SharedModule { }
