import { Component, ChangeDetectionStrategy, Input, AfterViewInit } from '@angular/core';
import Lottie from 'lottie-web';

@Component({
  selector: 'app-on-boarding-slide',
  templateUrl: './on-boarding-slide.component.html',
  styleUrls: ['./on-boarding-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnBoardingSlideComponent implements AfterViewInit {
  @Input() public heading: string;
  @Input() public text: string;
  @Input() public animationName: string;

  constructor() { }

  public ngAfterViewInit(): void {
    Lottie.loadAnimation({
      container: document.getElementById(this.animationName),
      loop: true,
      path: `/assets/lottie/${this.animationName}.json`
    });
  }
}
