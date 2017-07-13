import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VenderPage} from '../vender/vender';
import {VerificarPage} from '../verificar/verificar';
import { PvdGeolocationProvider } from '../../providers/pvd-geolocation/pvd-geolocation';
import { Device } from '@ionic-native/device'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	uuid:any=this.device.uuid;
   constructor(public nav: NavController,
   		public pvdGeolocationProvider:PvdGeolocationProvider,
   		public device:Device){
   	console.log(this.uuid);
   	
		this.uuid=device.uuid;
	}

	verificar(){
		this.nav.push(VerificarPage);
	}
	
	vender(){
		this.nav.push(VenderPage);
	}
}
