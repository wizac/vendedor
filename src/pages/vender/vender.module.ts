import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VenderPage } from './vender';

@NgModule({
  declarations: [
    VenderPage,
  ],
  imports: [
    IonicPageModule.forChild(VenderPage),
  ],
  exports: [
    VenderPage
  ]
})
export class VenderPageModule {}
