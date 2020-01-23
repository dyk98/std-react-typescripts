import {Container, ContainerModule} from "inversify";
import homeStore from './homeStore'
import {IHomeStoreClassType} from './homeType'
import TYPE from "../../TYPE";

const homeContainer = new Container();

const myHomeStore = new ContainerModule(bind => {
  bind<IHomeStoreClassType>(TYPE.IHomeType).to(homeStore)
});

const initialize = () => {
  homeContainer.load(myHomeStore)
};

initialize();

export {homeContainer};
