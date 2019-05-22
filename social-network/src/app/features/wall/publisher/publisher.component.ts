import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WallService } from 'src/app/core/services/wall.service';

@Component({
  selector: 'sn-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent {
  @Output() publish = new EventEmitter();

  exploreKey(value) {}

  publishContent(value: string) {
    this.publish.emit(value);
  }
}
