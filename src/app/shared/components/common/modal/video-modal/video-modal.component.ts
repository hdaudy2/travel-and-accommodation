import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
  standalone: false
})
export class VideoModalComponent {

  @Input() data: string = '';

  constructor(private modal: NgbModal, public sanitizer: DomSanitizer) {}

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
  close() {
    this.modal.dismissAll();
  }
}
