import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ApiService } from '../shared/services/api.service';

import { BannerComponent } from '../shared/modals/banner/banner.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  bannerData: any;

  bsModalRef: BsModalRef | undefined;


  constructor(
    private apiService: ApiService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.apiService.getBanner().subscribe((res: any) => {

      setTimeout(() => this.openModal(res), 2000);

    });
  }


  openModal(bannerData: any): any {
    const initialState = {
      bannerData
    };

    this.bsModalRef = this.modalService.show(BannerComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
