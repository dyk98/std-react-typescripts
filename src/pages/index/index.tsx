import * as React from 'react';
// import { Link } from 'react-router-dom';
import {IndexWrapper} from './style';
import {observer} from 'mobx-react'

interface IHomeProps {
}

interface IHomeState {
}

@observer
class Index extends React.Component<IHomeProps, IHomeState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <IndexWrapper>

            </IndexWrapper>
        );
    }
}


export default Index;
