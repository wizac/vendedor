import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerificarPage } from './verificar';

@NgModule({
  declarations: [
    VerificarPage,
  ],
  imports: [
    IonicPageModule.forChild(VerificarPage),
  ],
  exports: [
    VerificarPage
  ]
})
export class VerificarPageModule {}
