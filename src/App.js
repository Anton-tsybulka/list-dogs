import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { HeaderContent, Contents } from './components/index';

const App = () => {
  return (
    <Layout>
      <HeaderContent />
      <Contents />     
    </Layout>
  );
};

export default App;
