import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Class UtilServiceProvider
 */
@Injectable()
export class UtilServiceProvider {
  
  /**
   * Constructor for UtilServiceProvider
   *
   * @param {Http} http
   */
  constructor(public http: Http) {
    console.log('Hello UtilServiceProvider Provider');
  }
  
  /**
   * Console logs a formatted debug statement
   *
   * @param {string} title
   * @param data
   * @param {boolean} type
   */
  debug(title: string, data?: any, type = false) {
    let formattedTitle = '\n\n **** ' + title.toUpperCase() + ' ****\n\n';
    console.log(formattedTitle);
    
    if (type) {
      console.log('[DataType] - ' + typeof data + '\n');
    }
    
    if (typeof data === 'object') {
      var isArray = Array.isArray(data);
      
      if (isArray === true) {
        console.log('Argument data is array, looping...\n');
        
        data.forEach(elem => {
          console.log(JSON.stringify(elem));
        });
        
        console.log('Finished looping data.\n');
      }
    } else {
      console.log(JSON.stringify(data));
    }
  
    console.log('\n **** Fin ' + title + ' ****\n');
  }

}
