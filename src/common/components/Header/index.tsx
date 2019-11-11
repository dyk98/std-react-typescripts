import * as React from 'react';
// import { Link } from 'react-router-dom';
import {HeaderWrapper} from './style';

interface IHomeProps {
}

interface IHomeState {
}

class Header extends React.Component<IHomeProps, IHomeState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <HeaderWrapper>

            </HeaderWrapper>
        );
    }
}


export default Header;
