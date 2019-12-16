// interface Props {
//   name: string,
//   enthusiasmLevel?: number,
// }

// export default function Hello({ name, enthusiasmLevel = 1 }: Props) {
//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello { name + getExclamationMarks(enthusiasmLevel) }
//       </div>
//     </div>
//   )
// }

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }

import React from 'react'
import { Tree } from 'antd';

const styles = require('./style.scss');

const { TreeNode, DirectoryTree } = Tree;

export default class Hello extends React.Component {
  onSelect = (keys: any, event: any) => {
    console.log('Trigger Select', keys, event);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };

  render() {

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
            title: 'app.tsx'
          }
        ]
      },
    ]

    interface INode {
      key: string,
      title: string,
      children?: INode[],
    }

    function loop(data: INode[]): JSX.Element[] {
      return data.map(item => {
        if (item.children && item.children.length) {
          return (
            <TreeNode key={item.key} title={item.title}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={item.title} isLeaf/>;
      });
    }

    return (
      <DirectoryTree multiple defaultExpandAll onSelect={this.onSelect} onExpand={this.onExpand}
        className={styles['tree-container']}
      >
        {loop(data)}
      </DirectoryTree>
    );
  }
}