import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  bannerData: any;
  closeBtnName!: string;
  showCustomizePanel = false;
  showAccordian = false;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    console.log(this.bannerData);
  }


  open(): void {

  }

  close(): void {
    this.bsModalRef.hide();
  }


}
