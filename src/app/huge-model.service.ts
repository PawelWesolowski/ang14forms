import { Injectable } from '@angular/core';
import { Model, SmallSubModel, HugeSubModel } from './model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HugeModelService {

  private mainModel: Model|null = null;
  public mainModel$: BehaviorSubject<Model|null> = new BehaviorSubject<Model|null>(null);


  constructor() { }

  public createMain(){
    this.mainModel = new Model();
    this.mainModel$.next(this.mainModel);

  }

}
