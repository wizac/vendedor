import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PvdGeolocationProvider } from '../../providers/pvd-geolocation/pvd-geolocation';
import { PvdHttpProvider } from '../../providers/pvd-http/pvd-http';

@IonicPage()
@Component({
  selector: 'page-verificar',
  templateUrl: 'verificar.html',
})
export class VerificarPage {

  
  clave:any;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public pvdGeolocationProvider:PvdGeolocationProvider,
   public pvdHttpProvider:PvdHttpProvider) 
  {
  	this.clave="";
  }
  

  verificarRest() {
    console.log("entra al rest");

    //conseguir valor del input }
	var lat;
	var long;
	console.log(this.clave);
	//recuperar patente del input 
	
  	this.pvdGeolocationProvider.getpos().then((resp)=>{
			lat=JSON.parse(JSON.stringify(resp))['lat'];
			long=JSON.parse(JSON.stringify(resp))['long'];
  		}).then(()=>{
  				this.pvdHttpProvider.verificar(lat,long,this.clave).then((algo)=>{
  			console.log(algo);
  		})
  	})
	}
}
