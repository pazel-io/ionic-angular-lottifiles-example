import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnBoardingRoutingModule } from './on-boarding-routing.module';
import { OnBoardingComponent } from './on-boarding.component';
import { IonicModule } from '@ionic/angular';
import { OnBoardingSlideComponent } from './on-boarding-slide/on-boarding-slide.component';


@NgModule({
  declarations: [OnBoardingComponent, OnBoardingSlideComponent],
  imports: [
    CommonModule,
    OnBoardingRoutingModule,
    IonicModule
  ]
})
export class OnBoardingModule {}
