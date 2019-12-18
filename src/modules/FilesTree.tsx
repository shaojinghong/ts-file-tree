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
  status?: string,
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
        if (item.status === 'creating') {
          delete item.status;
        }
        item.title = name;
        return;
      } else {
        if (item.children) {
          rename(item.children, key, name);
        }
      }
    })
  }

  const addFile = (data: INode[], key: string) => {
    let newNode = {
      key: '',
      title: '',
      status: 'creating'
    }
    data.forEach((item) => {
      if (item.key === key) {
        if (!item.children) {
          item.children = [];
        }
        newNode.key = `${item.key}-${item.children.length}`
        item.children.push(newNode);
        return;
      } else {
        if (item.children) {
          addFile(item.children, key);
        }
      }
    })
  }

  const addFolder = (data: INode[], key: string) => {
    let newNode = {
      key: '',
      title: '',
      children: [],
      status: 'creating'
    }
    data.forEach((item) => {
      if (item.key === key) {
        if (!item.children) {
          item.children = [];
        }
        newNode.key = `${item.key}-${item.children.length}`
        item.children.push(newNode);
        return;
      } else {
        if (item.children) {
          addFolder(item.children, key);
        }
      }
    })
  }

  const handleDelete = (key: string) => {
    deleteNode(data, key);
    setData([...data]);
  }

  const handleRename = (key: string, name: string) => {
    rename(data, key, name);
    setData([...data]);
  }

  const handleFileAdd = (key: string) => {
    addFile(data, key);
    setData([...data]);
  }

  const handleFolderAdd = (key: string) => {
    addFolder(data, key);
    setData([...data]);
  }

  function loop(data: INode[]): JSX.Element[] {
    return data.map(item => {
      if (item.children) {
        return (
          <TreeNode
            key={item.key}
            title={
              <DirectoryActions
                node={item}
                onDelete={handleDelete}
                onRename={handleRename}
                onFileAdd={handleFileAdd}
                onFolderAdd={handleFolderAdd}
              />
            }>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          key={item.key}
          title={
            <FileActions
              node={item}
              onDelete={handleDelete}
              onRename={handleRename}
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