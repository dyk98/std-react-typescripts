import * as React from 'react';
// import { Link } from 'react-router-dom';
import {Office} from './style';
import {observer} from 'mobx-react'
import officeUnder from '../../../assets/img/home/officeUnder.png'
import office from '../../../assets/img/home/office.png'

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
            <Office>
                <div className='content'>
                    <div className='content_left'>
                        <div>
                            <div>办公室简介</div>
                            <div/>
                            <div>About us</div>
                        </div>

                        <div>
                            <div>
                                随着中国汽车保有量的快速增长，中国已经步入汽车社会。汽车在提高人们生活水平的同时，也给社会带来了严重的问题，如儿童这一弱势群体在汽车社会中面临的交通安全威胁。由于儿童在交通中面临复杂的环境和问题，中国缺少完善的法规、监管、教育模式，以提高儿童交通安全水平，减少儿童道路交通事故伤害...
                            </div>
                            <div>
                                {' < < 更多'}
                            </div>
                        </div>

                        <img src={officeUnder} className='content_left_under'/>
                    </div>
                    <img src={office} className='content_right'/>
                </div>
            </Office>
        );
    }
}


export default Index;
