import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ApiService } from '../shared/services/api.service';

import { BannerComponent } from '../shared/modals/banner/banner.component';
import { Banner } from '../shared/models/banner.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  bannerData: Banner = new Banner();

  bsModalRef: BsModalRef | undefined;


  constructor(
    private apiService: ApiService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.apiService.getBanner().subscribe((res: Banner) => {

      setTimeout(() => this.openModal(res), 2000);

    }, (error: any) => {
      console.log(error);
    });
  }


  /**
   * Function opens banner modal
   * @param bannerData current banner data
   * @returns return tvoid
   */

  openModal(bannerData: Banner): void {
    const initialState = {
      bannerData
    };

    this.bsModalRef = this.modalService.show(BannerComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
