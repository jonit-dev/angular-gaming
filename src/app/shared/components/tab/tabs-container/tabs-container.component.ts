import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss'],
})
export class TabsContainerComponent implements AfterContentInit {
  // this will make it possible to fetch our app-tabs components inside tabs-container
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  constructor() {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (!activeTabs || activeTabs.length === 0) {
      // if no active tabs
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent): boolean {
    this.tabs.forEach((tab) => {
      // turn all tabs off
      tab.active = false;
    });

    tab.active = true;

    return false; //this will be the same as e.preventDefault();
  }
}
