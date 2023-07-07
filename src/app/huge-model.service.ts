import { Injectable } from '@angular/core';
import { Model, SmallSubModel, HugeSubModel } from './model';
import {BehaviorSubject, map, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HugeModelService {

  public useRx = false;

  public mainModel: Model | null = null;
  public mainModel$: BehaviorSubject<Model | null> = new BehaviorSubject<Model | null>(null);

  constructor() {

  }

  public createMain() {
    this.mainModel = new Model();
    this.mainModel$.next(this.mainModel);
  }
  public destroyMain(){
    this.mainModel = null;
    this.mainModel$.next(this.mainModel);
  }

  public createSmall() {
    this.mainModel?.createSmall();
    this.mainModel$.next(this.mainModel);
  }

  public createBig() {
    this.mainModel?.createBig(this.mainModel?.small?.twoDigitNumber);
    this.mainModel$.next(this.mainModel);
  }

  public destroySmall(){
    if(this.mainModel?.small) this.mainModel.small = null;
    this.mainModel$.next(this.mainModel);
  }

  public destroyBig(){
    if(this.mainModel?.big) this.mainModel.big = null;
  }

  public getSmallModel$() : Observable<SmallSubModel|null|undefined>{
    return this.mainModel$.asObservable().pipe(
        map((mainModel) => mainModel?.small)
    );
  }
  public getBigModel$() : Observable<HugeSubModel|null|undefined>{
    return this.mainModel$.asObservable().pipe(
        map((mainModel) => mainModel?.big)
    );
  }

  public getBigModelsArray$() : Observable<string[]|null|undefined>{
    return this.mainModel$.asObservable().pipe(
      map((mainModel) => mainModel?.big?.hugeArray)
    );
  }
}
