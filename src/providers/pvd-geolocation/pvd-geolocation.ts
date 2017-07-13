import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import {PvdHttpProvider} from '../pvd-http/pvd-http'


@Injectable()
export class PvdGeolocationProvider {
 
  constructor(public geolocation: Geolocation) {
    
  }
   getpos(){
  	return this.geolocation.getCurrentPosition().then((resp) => {
		return Promise.resolve({lat:resp.coords.latitude,long:resp.coords.longitude});
	}).catch((error) => {
  		console.log('Error getting location', error);
	});
 }
}
