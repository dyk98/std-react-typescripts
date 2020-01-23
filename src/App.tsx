import * as React from 'react';
import './App.scss';
import 'reflect-metadata'
import {HashRouter, Route, Switch} from 'react-router-dom';
// 页面
import Home from './pages/home';

class App extends React.Component {
    public render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact={true} path='/' component={Home}/>
                    </Switch>
                </HashRouter>
            </div>

        );
    }
}

export default App;
