import * as React from 'react';
// import { Link } from 'react-router-dom';
import styles from "./index.scss";
import {observer} from 'mobx-react'

interface IHeaderProps {
}

interface IHeaderState {
}

@observer
class Header extends React.Component<IHeaderProps, IHeaderState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className={styles.header}>
               这是一个公共组件
            </div>
        );
    }
}


export default Header;
