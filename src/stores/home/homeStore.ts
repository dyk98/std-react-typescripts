import {observable, action} from 'mobx'
import {injectable} from 'inversify'
import {IHomeStoreClassType} from "./homeType";

@injectable()
class HomeStore implements IHomeStoreClassType{

  @observable
  public num: number = 0;

  @action.bound
  public addNum = () => {
    this.num++
  };

  @action.bound
  public reduceNum = () => {
    this.num--
  }

}


export default HomeStore;
