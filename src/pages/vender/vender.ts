import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PvdGeolocationProvider } from '../../providers/pvd-geolocation/pvd-geolocation';
import { PvdHttpProvider } from '../../providers/pvd-http/pvd-http';


@IonicPage()
@Component({
  selector: 'page-vender',
  templateUrl: 'vender.html',
})
export class VenderPage {


	telefono:any
	horas:any
	patente:any
	

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public pvdGeolocationProvider:PvdGeolocationProvider,
  	public pvdHttpProvider:PvdHttpProvider) {
  	this.telefono="";
  	this.horas=0;
  	this.patente="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenderPage');
  }



  cambiarCampoTarifa(){
  	  	console.log("entra al rest");
	var lat;
	var long;
  	this.pvdGeolocationProvider.getpos().then((resp)=>{
			lat=JSON.parse(JSON.stringify(resp))['lat'];
			long=JSON.parse(JSON.stringify(resp))['long'];
  		}).then(()=>{
  				this.pvdHttpProvider.getTarifaByGeoForInspector(lat,long).then((algo)=>{
  			console.log(algo);

  			//usar el algo['tarifa'] para reemplazar valor en input---que el input no sea editable 
  		})
  	})
  }

  venderRest(){
  	console.log("entra al rest");
	var lat;
	var long;
	console.log(this.telefono)
	console.log(this.patente)
	console.log(this.horas)

  	this.pvdGeolocationProvider.getpos().then((resp)=>{
			lat=JSON.parse(JSON.stringify(resp))['lat'];
			long=JSON.parse(JSON.stringify(resp))['long'];
  		}).then(()=>{
  				this.pvdHttpProvider.iniciarTurnoInspector(lat,long,this.patente,this.telefono,this.horas).then((algo)=>{
  			console.log(algo);
  		})
  	})
  }
  	
}