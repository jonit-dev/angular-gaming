import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalId: string;

  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    // this works like the React portals technique... we are directly injecting the modal into the DOM (body), to avoid CSS clashes
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.modal.unregister(this.modalId);
  }
}
