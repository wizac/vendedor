import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Device } from '@ionic-native/device'
/*
  Generated class for the PvdHttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PvdHttpProvider {
  uuid:string;
  constructor(public http: Http,
    public device:Device) {
  }

// getTarifaByGeoForInspector
urlApp:any="http://pillpa.cloud.runaid.com.ar/device";
urlAppPrueba:any="http://192.168.0.58:8080/pillpa/device/";
getTarifaByGeoForInspector(lat,long) {
    
    var url = this.urlAppPrueba+'getTarifaByGeoForInspector?latitud=' + lat + '&longitud='+long;

    console.log('url');
    console.log(url);
    var respuesta;

    return this.http.get(url).map(res => res.json()).map(
      data => {
        respuesta = JSON.parse(JSON.stringify(data));
        console.log('---respuesta del get');
        console.log(respuesta);
        return respuesta;
      },
      err =>
       console.log("Fallo la comunicación con el servidor")
    ).toPromise();
  }

  iniciarTurnoInspector(lat,long,mat,tel,hora) {
    
    var disp = this.device.uuid;
    var url = this.urlAppPrueba+'iniciarTurnoInspector?deviceID='+disp+'&latitud=' + lat + '&longitud='+long+'&matricula='+mat+'&telefono='+tel+'&cantHoras='+hora;

    console.log('url');
    console.log(url);
    var respuesta;
    return this.http.get(url).map(res => res.json()).map(
      data => {
        respuesta = JSON.parse(JSON.stringify(data));
        console.log('---respuesta del get');
        console.log(respuesta);
        return respuesta;
      },
      err =>
       console.log("Fallo la comunicación con el servidor")
    ).toPromise();

  }


  verificar(lat,long,patente){

    //sacar dispositivo uuid aca 
   var disp = this.device.uuid;
   console.log(disp);
  var url = this.urlAppPrueba+'verificar?latitud=' + lat + '&longitud='+long+'&deviceID='+disp+'&patente='+patente;

    console.log('url');
    console.log(url);
    var respuesta;
    return this.http.get(url).map(res => res.json()).map(
      data => {
        console.log('se rompe?');
        respuesta = JSON.parse(JSON.stringify(data));
        console.log('---respuesta del get');
        console.log(respuesta);
        return respuesta;
      },
      err =>
       console.log("Fallo la comunicación con el servidor")
    ).toPromise();
  }


  llamarGrua(lat,long,patente){
   var disp = this.device.uuid;
   var url = this.urlAppPrueba+'alertaGrua?latitud=' + lat + '&longitud='+long+'&patente='+patente+'&deviceID='+disp;
    var respuesta;
    return this.http.get(url).map(res => res.json()).map(
      data => {  
        respuesta = JSON.parse(JSON.stringify(data));
        return respuesta;
      },
      err =>
       console.log("Fallo la comunicación con el servidor")
    ).toPromise();
  }

}
