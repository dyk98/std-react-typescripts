import * as React from 'react';
import {observer} from 'mobx-react'
import logo from '../../../assets/img/home/logo.png'
import  styles from './index.scss';

interface IHomeProps {
    num: number;// 数字
    onClickAdd: () => void;// 加数字
    onClickReduce: () => void;// 减数字
}

interface IHomeState {
}

@observer
class Index extends React.Component<IHomeProps, IHomeState> {

    constructor(props) {
        super(props);
    }

    public handleClickAdd = () => {
        this.props.onClickAdd()
    }

    public handleClickReduce = () => {
        this.props.onClickReduce()
    }

    public render() {
        const { num } = this.props

        return (
            <div>
                <p>这是一个数字：{num}</p>
                <button onClick={this.handleClickAdd}>点击加一</button>
                <button onClick={this.handleClickReduce}>点击减一</button>
                <img src={logo} alt="" />
            </div>
        );
    }
}


export default Index;
