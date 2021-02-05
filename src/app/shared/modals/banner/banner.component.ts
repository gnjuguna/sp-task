import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Banner, Accordian, Plugin } from '../../models/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  bannerData: Banner = new Banner();
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

  /**
   * This hides/shows plugins accordions
   * @param index Current accordion index
   * @returns return true if accordions index = current index
   */

  showAccordian(index: number): void {
    if (this.showAccordianIndex === index) {
      this.showAccordianIndex = -1;
    } else {
      this.showAccordianIndex = index;
    }
  }


  /**
   * This hides/shows cusomize panel
   * @returns switches to true/false
   */

  showCustomizePanel(): void {
    this.hideCustomizePanel = !this.hideCustomizePanel;
    if (!this.hideCustomizePanel) {
      this.showAccordianIndex = -1;
    }
  }

  /**
   * Function checks if any plugin is selected
   * @param index Current plugin index
   * @returns returns true if 1 or more plugins is selected
   */

  pluginsSelected(index: number): boolean {
    const enabledPlugins = this.bannerData.accordian[index].PluginList.filter((plugin: Plugin) => plugin.BlockingEnabled);
    return enabledPlugins.length > 0;
  }

  /**
   * Function enables all accordion pluggins if selected
   * @param event checkbox event
   * @param event accordion index
   * @returns checks all plugins to true/false based on the event target status
   */

  enableAllAccordianPlugins(event: any, index: number): void {
    this.bannerData.accordian[index].PluginList.forEach((plugin: Plugin) => {
      if (event.target.checked) {
        return plugin.BlockingEnabled = true;
      } else {
        return plugin.BlockingEnabled = false;
      }
    });
  }


  /**
   * Function enables all plugins
   * @returns checks all plugins to true
   */

  enableAllPlugins(): void {
    this.bannerData.accordian.forEach((acc: Accordian) => {
      return acc.PluginList.forEach((plugin: Plugin) => {
        return plugin.BlockingEnabled = true;
      });
    });
  }


  /**
   * Function saves current banner
   * @returns void
   */

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
