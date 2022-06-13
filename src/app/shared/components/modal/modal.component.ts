import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalId: string;

  constructor(public modal: ModalService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.modal.unregister(this.modalId);
  }
}
