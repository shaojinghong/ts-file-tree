import React, { useState } from 'react';
import { Icon, Tooltip, Input } from 'antd';

interface Props {
  title: string,
  nodeKey: string,
  onDelete: (nodeKey: string) => void,
  onRename: (key: string, inputValue: string) => void
}

export default function Title({ title, onDelete, nodeKey, onRename }: Props) {

  const [isFocusing, setIsFocusing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const enterHandler = () => {
    setIsFocusing(true);
  }

  const leaveHandler = () => {
    setIsFocusing(false);
  }

  const submitHandler = () => {
    setIsEditing(false);
    if (inputValue.length < 1) {
      return;
    }
    onRename(nodeKey, inputValue);
  }

  const Operations = () => {
    const handleDelete = (e: any) => {
      onDelete(nodeKey);
      e.stopPropagation();
    }

    const handleRename = (e: any) => {
      setIsEditing(true);
      e.stopPropagation();
    }

    return (
      <span style={{float: 'right'}}>
        <Tooltip title="重命名">
          <Icon type="edit" style={{marginRight: '10px'}} onClick={handleRename}></Icon>
        </Tooltip>
        <Tooltip title="删除文件">
          <Icon type="close" onClick={handleDelete}></Icon>
        </Tooltip>
      </span>
    )
  }

  const renderInput = () => {
    return (
      <Input autoFocus
        size="small"
        placeholder={title}
        onClick={(e) => {e.stopPropagation()}}
        onBlur={submitHandler}
        onPressEnter={submitHandler}
        onChange={(e) => {setInputValue(e.target.value)}}
      />
    )
  }

  return (
    <span
      style={{display: 'inline-block', width: '100%'}}
      onMouseEnter={enterHandler}
      onMouseLeave={leaveHandler}
    >
      { 
        isEditing ? renderInput() : title
      }
      {isFocusing && !isEditing && <Operations/>}
    </span>
  )
}
