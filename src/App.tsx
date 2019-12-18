import { hot } from 'react-hot-loader/root';
import React from 'react';
import 'antd/dist/antd.css';

import FilesTree from "./modules/FilesTree";
import './scss/main.scss';

const App = () => {
  const data = [
    {
      key: '0-1',
      title: 'components',
      children: [
        {
          key: '0-1-0',
          title: 'Toolbar.tsx',
          children: [
            {
              key: '0-1-0-0',
              title: 'Button.tsx',
            },
            {
              key: '0-1-0-1',
              title: 'Icon.tsx'
            }
          ]
        },
        {
          key: '0-1-1',
          title: 'Tittle.tsx',
        },
      ]
    },
    {
      key: '0-0',
      title: 'src',
      children: [
        {
          key: '0-0-0',
          title: 'index.ts'
        },
        {
          key: '0-0-1',
          title: 'app.tsx',
        }
      ]
    },
  ]

  return (
    <FilesTree sourceData={data}/>
  );
}

export default hot(App);
