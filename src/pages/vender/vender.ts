import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PvdGeolocationProvider } from '../../providers/pvd-geolocation/pvd-geolocation';
import { PvdHttpProvider } from '../../providers/pvd-http/pvd-http';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-vender',
  templateUrl: 'vender.html',
})
export class VenderPage {


	telefono:any
	horas:any
	patente:any
	tarifa:any
  alert:any

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public pvdGeolocationProvider:PvdGeolocationProvider,
  	public pvdHttpProvider:PvdHttpProvider,
  	public alertController:AlertController) {

  	this.telefono="";
  	this.horas="";
  	this.tarifa="Buscando Precio...";
  	this.patente="";
  }

  ionViewDidLoad() {
    
	var lat;
	var long;
  	this.pvdGeolocationProvider.getpos().then((resp)=>{
			lat=JSON.parse(JSON.stringify(resp))['lat'];
			long=JSON.parse(JSON.stringify(resp))['long'];
  		}).then(()=>{
  			this.pvdHttpProvider.getTarifaByGeoForInspector(lat,long).then((algo)=>{
  			console.log(algo);
        this.tarifa=algo['tarifa'];
  		})
  	})
  }

  tirarAlertaSuccess(){//spartan English
  	 let alert = this.alertController.create({
      title: 'Nueva Venta',
      subTitle: 'Se ha registrado una venta!',
      buttons: [{text: 'Ok',
          role: 'destructive',
          handler: () => {
            this.navCtrl.pop();
          }}]
    });
    alert.present();

  }

// tirarAlertaError(){//spartan English
//      let alert = this.alertController.create({
//       title: 'Error',
//       subTitle: 'Ocurrio un error al registrar la venta, intente de nuevo mas tarde',
//       buttons: ['OK']
//     });
//     alert.present();
//   }


  venderRest(){
  	console.log("entra al rest");
	var lat;
	var long;
  	this.pvdGeolocationProvider.getpos().then((resp)=>{
			lat=JSON.parse(JSON.stringify(resp))['lat'];
			long=JSON.parse(JSON.stringify(resp))['long'];
  		}).then(()=>{
  				this.pvdHttpProvider.iniciarTurnoInspector(lat,long,this.patente,this.telefono,this.horas).then((algo)=>{
  				if(algo['success'])
          {
            this.tirarAlertaSuccess();
          }
  		})
  	})
  }
  	
}