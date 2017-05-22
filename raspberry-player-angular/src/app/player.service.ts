import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  testService(): Promise<string> {
    return this.http.get("/test")
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
      })
  }


}
