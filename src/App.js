import React from 'react';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { HeaderContent, Home, ListDogs } from './components/index';

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <HeaderContent />        
      <Content className='site-layout' style={{marginTop: 64}}>
        <div className='site-layout-background' style={{padding: 10}}>
          <Route path='/' component={() => <Home />} key='1' exact />
          <Route path='/listdogs' component={() => <ListDogs />} key='2' />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
