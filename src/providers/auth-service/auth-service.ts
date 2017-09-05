import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Class AuthServiceProvider
 */
@Injectable()
export class AuthServiceProvider {
  
  /**
   * Constructor for AuthServiceProvider
   *
   * @param {Http} http
   */
  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

}
