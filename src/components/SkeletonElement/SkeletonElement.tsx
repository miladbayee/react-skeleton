import { FC } from "react";

import './skeleton-element.css'
type IProps = {
  type: string;
  animation?:'star' | 'none'
};
const SkeletonElement: FC<IProps> = ({ type,animation }) => {
const animat = animation ? animation : 'skeleton';
  const classes = `skeleton-${type} ${animat}`;

  return <div className={classes}></div>;
};

export default SkeletonElement;
