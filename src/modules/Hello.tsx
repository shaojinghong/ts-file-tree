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
    return (
      <DirectoryTree multiple defaultExpandAll onSelect={this.onSelect} onExpand={this.onExpand}
        className={styles['tree-container']}
      >
        <TreeNode title="components" key="0-1">
          <TreeNode title="Toolbar.tsx" key="0-1-0">
            <TreeNode title="Button.tsx" key="0-1-0-0" isLeaf />
            <TreeNode title="Icon.tsx" key="0-1-0-1" isLeaf />
          </TreeNode>
          <TreeNode title="Tittle.tsx" key="0-1-1" isLeaf />
        </TreeNode>
        <TreeNode title="src" key="0-0">
          <TreeNode title="index.ts" key="0-0-0" isLeaf />
          <TreeNode title="app.tsx" key="0-0-1" isLeaf />
        </TreeNode>
      </DirectoryTree>
    );
  }
}