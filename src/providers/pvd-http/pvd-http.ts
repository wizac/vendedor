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

getTarifaByGeoForInspector(lat,long) {
    
    var url = 'http://pillpa.cloud.runaid.com.ar/device/getTarifaByGeoForInspector?latitud=' + lat + '&longitud='+long;

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
    var url = 'http://pillpa.cloud.runaid.com.ar/device/iniciarTurnoInspector?deviceID='+disp+'&latitud=' + lat + '&longitud='+long+'&matricula='+mat+'&telefono='+tel+'&cantHoras='+hora;

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
  var url = 'http://pillpa.cloud.runaid.com.ar/device/verificar?latitud=' + lat + '&longitud='+long+'&deviceID='+disp+'&patente='+patente;

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
}
