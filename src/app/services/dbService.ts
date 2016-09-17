import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';

@Injectable()
export class Db {
  private _db: any;

  constructor() {

  }

  create(dbName: string) {
    console.log(`creating db: ${dbName}`);

    return this._db = new PouchDB(dbName);
  }

  add(data: Object) {
    console.log(`adding to db:`, data);
    return this._db.post(data);


  }
}
