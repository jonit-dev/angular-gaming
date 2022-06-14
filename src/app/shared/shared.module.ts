import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsContainerComponent } from './components/tab/tabs-container/tabs-container.component';

@NgModule({
  declarations: [ModalComponent, TabsContainerComponent, TabComponent],
  imports: [CommonModule],
  exports: [ModalComponent, TabComponent, TabsContainerComponent],
})
export class SharedModule {}
