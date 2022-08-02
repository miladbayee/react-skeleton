import { FC } from "react";

// styles
import "./skeleton-element.css";

// types
type SkeletonType = "avatar" | "title" | "text";
type AnimationType = "star";

type IProps = {
  type: SkeletonType;
  animation?: AnimationType;
  width?: string;
};

const SkeletonElement: FC<IProps> = ({ type, animation, width }) => {
  const animat = animation ? animation : "skeleton";
  const classes = `skeleton-${type} ${animat}`;
  const styles = { width: width ? width : "" };

  return <div style={styles} className={classes}></div>;
};

export default SkeletonElement;
