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
              title: 'Button.scss',
            },
            {
              key: '0-1-0-1',
              title: 'Icon.tsx'
            }
          ]
        },
        {
          key: '0-1-1',
          title: 'source.json',
        },
      ]
    },
    {
      key: '0-0',
      title: 'src',
      children: [
        {
          key: '0-0-0',
          title: 'index.html'
        },
        {
          key: '0-0-1',
          title: 'app.tsx',
        }
      ]
    },
    {
      key: '0-2',
      title: '.eslintrc',
    },
    {
      key: '0-3',
      title: 'config.yaml',
    },
    {
      key: '0-4',
      title: 'favicon.ico',
    },
    {
      key: '0-5',
      title: 'README.md',
    }
  ]

  return (
    <FilesTree sourceData={data}/>
  );
}

export default hot(App);
