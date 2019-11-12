import * as React from 'react';
// import { Link } from 'react-router-dom';
// @ts-ignore
import styles from './index.scss';
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
        return (
            <div className={styles.header}>
                <p>123</p>
            </div>
        );
    }
}


export default Header;
