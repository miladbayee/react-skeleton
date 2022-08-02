import SkeletonElement from "../SkeletonElement/SkeletonElement";

// styles
import './skeleton-prfile__wrapper.css'

const SkeletonProfile = () => {
  return (
    <div className="skeleton-prfile__wrapper">
      <div>
        <SkeletonElement type="avatar" />
      </div>
      <div>
        <SkeletonElement type="title" width="120px" />
        <div className="skeleton-prfile__texts">
          <SkeletonElement type="text" width="40px" />
          <SkeletonElement type="text" width="40px" />
        </div>
        <SkeletonElement type="text" width="100px" />
      </div>
    </div>
  );
};

export default SkeletonProfile;
