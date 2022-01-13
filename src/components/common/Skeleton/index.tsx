import React from "react";
import _ from "lodash";
import { Skeleton as SkeletonAtd } from "antd";

interface Props {
  width?: number | string;
}

const Skeleton = (props: Props) => {
  const {width} = props;
  return (
    <SkeletonAtd className="customSkeleton" title={false} paragraph={{ rows: 1, width: width }} active />
  );
};

export default Skeleton;


