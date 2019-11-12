import * as React from 'react';
// import { Link } from 'react-router-dom';
import './index.scss';
import {observer} from 'mobx-react'
import Office from './Office'

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
            <div>
                {/*办公室*/}
                <Office/>
            </div>
        );
    }
}


export default Index;
