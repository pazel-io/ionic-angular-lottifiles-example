import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { onBoardingSources } from './on-boarding';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss']
})
export class OnBoardingComponent {
  @ViewChild('slides') public slides: IonSlides;
  public reachEnd = false;
  public slideOpts = {};
  public onBoardingSources = onBoardingSources;

  constructor(
  ) { }

  public async nextSlide() {
    await this.slides.slideNext();
    this.reachEnd = await this.slides.isEnd();
  }

  public startApp() {
    console.log('Show the homepage');
  }

  public async onButtonClick() {
    const isEnd = await this.slides.isEnd();
    const nextAction = isEnd ? this.startApp() : this.nextSlide();
  }

  public async slideWillChange() {
    this.reachEnd = await this.slides.isEnd();
  }

  public async slideToLast() {
    this.slides.slideTo(await this.slides.length() - 1);
  }
}
