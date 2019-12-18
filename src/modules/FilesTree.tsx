import React, {useState} from 'react'
import { Tree } from 'antd';
import { cloneDeep } from 'lodash';

import FileActions from './FileActions';
import DirectoryActions from './DirectoryActions';
const styles = require('./style.scss');

const { TreeNode, DirectoryTree } = Tree;

interface INode {
  key: string,
  title: string,
  children?: INode[],
}

interface Props {
  sourceData: INode[]
}

export default function FilesTree({ sourceData }: Props){
  const [data, setData] = useState(cloneDeep(sourceData));

  const onSelect = (keys: any, event: any) => {
    // console.log('Trigger Select', keys, event);
  };

  const onExpand = () => {
    // console.log('Trigger Expand');
  };

  // 递归删除某一个节点
  const deleteNode = (data: INode[], key: string) => {
    data.forEach((item, index) => {
      if (item.key === key) {
        data.splice(index, 1);
        return;
      } else {
        if (item.children) {
          deleteNode(item.children, key);
        }
      }
    })
  }

  const rename = (data: INode[], key: string, name: string) => {
    data.forEach((item) => {
      if (item.key === key) {
        item.title = name;
        return;
      } else {
        if (item.children) {
          rename(item.children, key, name);
        }
      }
    })
  }

  const handleDelete = (key: string) => {
    console.log('Delete: ', key);
    deleteNode(data, key);
    setData([...data]);
  }

  const handleRename = (key: string, name: string) => {
    rename(data, key, name);
    setData([...data]);
  }

  function loop(data: INode[]): JSX.Element[] {
    return data.map(item => {
      if (item.children && item.children.length) {
        return (
          <TreeNode
            key={item.key}
            title={
              <DirectoryActions title={item.title} nodeKey={item.key} onDelete={handleDelete} onRename={handleRename}/>
            }>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          key={item.key}
          title={
            <FileActions title={item.title} nodeKey={item.key} onDelete={handleDelete} onRename={handleRename}
          />}
          isLeaf
        />
      );
    });
  }

  return (
    <DirectoryTree multiple defaultExpandAll onSelect={onSelect} onExpand={onExpand}
      className={styles['tree-container']}
    >
      {loop(data)}
    </DirectoryTree>
  );
}