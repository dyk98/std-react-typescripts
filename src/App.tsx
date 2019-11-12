import * as React from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from './common/components/Header'
import 'antd/dist/antd.css';
// 页面
import Home from './pages/home';

class App extends React.Component {
    public render() {
        return (
            <div>
                <Header />
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
