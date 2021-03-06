import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderContent = () => {
    return (
        <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item key='2'><Link to='/listdogs'>List Dogs</Link></Menu.Item>
          </Menu>
        </Header>
    );
};

export default HeaderContent;