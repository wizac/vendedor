import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VenderPage} from '../vender/vender';
import {VerificarPage} from '../verificar/verificar';
import { PvdGeolocationProvider } from '../../providers/pvd-geolocation/pvd-geolocation';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   constructor(public nav: NavController,
   		public pvdGeolocationProvider:PvdGeolocationProvider){
		
	}

	verificar(){
		this.nav.push(VerificarPage);
	}
	
	vender(){
		this.nav.push(VenderPage);
	}
}
