import * as React from 'react';
// import { Link } from 'react-router-dom';
// @ts-ignore
import styles from "./index.scss";
import background from '../../../assets/img/header/background.png'
import { Input } from 'antd';
import {observer} from 'mobx-react'

interface IHomeProps {
}

interface IHomeState {
}

@observer
class Header extends React.Component<IHomeProps, IHomeState> {

    constructor(props) {
        super(props);
    }

    public render() {
        const { Search } = Input;
        return (
            <div className={styles.header}>
                <div style={{backgroundImage: `url(${background})`, backgroundSize: '100% 100%'}}
                     className={styles.header_top}>
                    <p className={styles.header_top_text}>欢迎您访问儿童安全乘车官网</p>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                </div>
                <div className={styles.header_bottom}>
                    <img src="" alt="" />
                </div>
            </div>
        );
    }
}


export default Header;
