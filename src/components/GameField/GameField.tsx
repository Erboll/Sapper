import React from 'react';
import './GameField.css'

interface Props extends React.PropsWithChildren{}
const GameField:React.FC<Props> = props => {
  return (
    <div className="field">
      {props.children}
    </div>
  );
};

export default GameField;