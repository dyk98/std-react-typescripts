import * as React from 'react';
import './index.scss';
import {observer} from 'mobx-react'
import Header from "../../common/components/Header";
import Demo from './Demo'
import TYPE from "../../TYPE";
import {IHomeStoreClassType} from "../../stores/home/homeType";
import {homeContainer} from "../../stores/home/homeInversify";

interface IHomeProps {
}

interface IHomeState {
}

@observer
class Index extends React.Component<IHomeProps, IHomeState> {

    protected homeStore: IHomeStoreClassType = homeContainer.get<IHomeStoreClassType>(TYPE.IHomeType);

    constructor(props) {
        super(props);
    }

    public render() {
        const { num, addNum, reduceNum } = this.homeStore
        return (
            <div>
                <Header />
                <Demo num={num} onClickAdd={addNum} onClickReduce={reduceNum} />
            </div>
        );
    }
}


export default Index;
