import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Class AuthServiceProvider
 */
@Injectable()
export class AuthServiceProvider {
  
  /**
   * Constructor for AuthServiceProvider
   *
   * @param {HTTP} http
   */
  constructor(private http: Http, private HTTP: HTTP) {
    console.log('Hello AuthServiceProvider Provider');
  }
  
  createUserAngular() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1', {})
      .toPromise()
      .then(response => {
        console.log('\n **** Angular Http Response **** \n');
        console.log('[Status] - ' + response.status + ' \n');
        console.log(response.json());
        console.log('**** Fin: Angular Http Response **** \n\n');
      })
      .catch(err => {
        console.log('\n\n **** ERROR **** \n');
        console.log(err);
        console.log('[Status] - ' + err.status + ' \n');
        console.log('[Error] - ' + err.error + ' \n');
        console.log('[Headers] - ' + err.headers + ' \n');
        console.log('**** Fin: ERROR **** \n\n');
      });
  }
  
  createUserNative() {
    this.HTTP.get('https://ionicframework.com', {}, {})
      .then(data => {
        console.log('\n **** HTTP Data **** \n');
        console.log('[Status] - ' + data.status + ' \n');
        console.log('[Data] - ' + data.data + ' \n');
        console.log('[Headers] - ' + data.headers + ' \n');
        console.log('**** Fin: HTTP Data **** \n\n');
      })
      .catch(err => {
        console.log('\n\n **** ERROR **** \n');
        console.log('[Status] - ' + err.status + ' \n');
        console.log('[Error] - ' + err.error + ' \n');
        console.log('[Headers] - ' + err.headers + ' \n');
        console.log('**** Fin: ERROR **** \n\n');
      });
  }

}
