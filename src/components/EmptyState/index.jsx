import React from "react";
import { Descriptions, Empty } from "antd";

const EmptyState = ({ description = "No Data" }) => {
  return (
    <div className="empty-state-container">
      <Empty
        className="empty-state-image"
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 200,
          width: 260,
        }}
        description=""
      ></Empty>
      <div className="empty-state-description">{description}</div>
    </div>
  );
};

export default EmptyState;
