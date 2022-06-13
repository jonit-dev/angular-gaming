import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}

  openModal(e: Event, modalId: string): void {
    e.preventDefault();

    this.modal.toggleModal(modalId);
  }
}
