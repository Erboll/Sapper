import React from 'react';
import './Counter.css'
interface Props {
  count:number;
}
const Counter:React.FC<Props> = (props) => {
  return (
    <div className="count">
       Tries : {props.count}
    </div>
  );
};

export default Counter;