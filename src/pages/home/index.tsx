import * as React from 'react';
// import { Link } from 'react-router-dom';
import './index.scss';
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
            <div>

                {/*dyk的header组件*/}
                <div className='header'>
                    <header className='app_header'>
                        <img src={logo} className='app_logo' alt="logo"/>
                        <h1 className="app_title">Welcome to React</h1>
                    </header>
                    <p className="app_intro">
                        To get started, edit <code>src/App.tsx</code> and save to reload.
                    </p>
                </div>

                <Office/>

            </div>
        );
    }
}


export default Index;
