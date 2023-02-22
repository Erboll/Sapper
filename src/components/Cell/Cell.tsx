import React from 'react';
import './Cell.css';

interface Props {
  cellClick:React.MouseEventHandler;
  color:boolean
}


const Cell:React.FC<Props> = (props) => {
  const backColor = ['cell']
  if (props.color){
    backColor.push('backColor')
  }
  return (
    <div className={backColor.join(' ')} onClick={props.cellClick}>
      <p>{props.color}</p>
    </div>
  );
};

export default Cell;