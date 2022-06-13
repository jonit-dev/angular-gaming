import { Injectable } from '@angular/core';

interface IModals {
  [modalId: string]: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private visible: boolean = false;

  private modals: IModals = {
    auth: false,
  };

  constructor() {}

  isModalOpen(modalId: string): boolean {
    return this.modals[modalId];
  }

  toggleModal(modalId: string): void {
    this.modals[modalId] = !this.modals[modalId];
  }
}
