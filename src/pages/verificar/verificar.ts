import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PvdGeolocationProvider } from '../../providers/pvd-geolocation/pvd-geolocation';
import { PvdHttpProvider } from '../../providers/pvd-http/pvd-http';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-verificar',
  templateUrl: 'verificar.html',
})
export class VerificarPage {

  cant:any;
  clave:any;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public pvdGeolocationProvider:PvdGeolocationProvider,
   public pvdHttpProvider:PvdHttpProvider,
   public alertController:AlertController) 
  {
  	this.clave="";
  }
  
 showClave() {
    let divClave = document.getElementById('invisibe');
    divClave.removeAttribute("hidden");
  }
  mostrarBotones(){
     this.showClave();

  }

  verificacionOk()
  {
  	let alert = this.alertController.create({
      title: 'Correcto',
      subTitle: 'Verificado con exito!',
      buttons: [{text: 'Ok',
          role: 'destructive',
          handler: () => {
            this.navCtrl.pop();
          }}]
    });
    alert.present();
  }

  mentira(){
    let alert = this.alertController.create({
      title: 'Alerta',
      subTitle: 'Mensaje enviado',
      buttons: [{text: 'Ok',
          role: 'destructive',
          handler: () => {
            this.navCtrl.pop();
          }}]
    });
    alert.present();
  }

  callGrua(){
     let alert = this.alertController.create({
      title: 'Alerta',
      subTitle: 'Alerta enviada',
      buttons: [{text: 'Ok',
          role: 'destructive',
          handler: () => {
          var lat;
          var long;
          this.pvdGeolocationProvider.getpos().then((resp)=>{
              lat=JSON.parse(JSON.stringify(resp))['lat'];
              long=JSON.parse(JSON.stringify(resp))['long'];
              console.log("llega algo");
               console.log(long);
                console.log(lat);
          })
          .then(()=>{
              this.navCtrl.pop();
              console.log("entra llamar grua ");
                this.pvdHttpProvider.llamarGrua(lat,long,this.clave).then((resp)=>
                {
                    console.log(resp);

                })
            }) 
          }
      }]
   });
   alert.present();
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
  			if(algo['cantidad']>0)
  			{
           this.cant=algo['cantidad'];
  				this.mostrarBotones();

  			}else{

  				this.verificacionOk();
  			
  			}
  		})
  	})
	}
}
