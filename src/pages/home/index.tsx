import * as React from 'react';
// import { Link } from 'react-router-dom';
import {IndexWrapper} from './style';
import {observer} from 'mobx-react'
import logo from "../../logo.svg";
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
            <IndexWrapper>

                {/*dyk的header组件*/}
                <div className='header'>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.tsx</code> and save to reload.
                    </p>
                </div>

                <Office/>

            </IndexWrapper>
        );
    }
}


export default Index;
