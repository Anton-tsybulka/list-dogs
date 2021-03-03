import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Home, ListDogs } from './index';

const { Content } = Layout;

const Contents = () => {
    return (
        <Content className='site-layout' style={{marginTop: 64}}>
            <div className='site-layout-background' style={{padding: 10}}>
            <Route path='/' component={() => <Home />} key='1' exact />
            <Route path='/listdogs' component={() => <ListDogs />} key='2' />
            </div>
        </Content>
    );
};

export default Contents;