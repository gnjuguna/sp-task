import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Banner, Accordian, Plugin } from '../../models/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  bannerData!: Banner;
  showSavingErrorMsg = false;
  showSavingSuccessMsg = false;
  closeBtnName!: string;
  hideCustomizePanel = true;
  showAccordianIndex = -1;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void { }

  close(): void {
    this.bsModalRef.hide();
  }

  showAccordian(index: number): void {
    if (this.showAccordianIndex === index) {
      this.showAccordianIndex = -1;
    } else {
      this.showAccordianIndex = index;
    }
  }

  showCustomizePanel(): void {
    this.hideCustomizePanel = !this.hideCustomizePanel;
    if (!this.hideCustomizePanel) {
      this.showAccordianIndex = -1;
    }
  }

  pluginsSelected(index: number): boolean {
    const enabledPlugins = this.bannerData.accordian[index].PluginList.filter((plugin: Plugin) => plugin.BlockingEnabled);
    return enabledPlugins.length > 0;
  }

  enableAllAccordianPlugins(event: any, index: number): void {
    this.bannerData.accordian[index].PluginList.forEach((plugin: Plugin) => {
      if (event.target.checked) {
        return plugin.BlockingEnabled = true;
      } else {
        return plugin.BlockingEnabled = false;
      }
    });
  }

  enableAllPlugins(): void {
    this.bannerData.accordian.forEach((acc: Accordian) => {
      return acc.PluginList.forEach((plugin: Plugin) => {
        return plugin.BlockingEnabled = true;
      });
    });
  }

  saveSettings(): void {
    this.showAccordianIndex = -1;
    this.hideCustomizePanel = true;
    setTimeout(() => {
      console.log(this.bannerData);
      this.showSavingSuccessMsg = true;
    }, 2000);
    this.showSavingSuccessMsg = false;
  }

}
