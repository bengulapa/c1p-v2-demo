import React from "react";
import ReactSpeedometer, {
  CustomSegmentLabelPosition,
} from "react-d3-speedometer";

interface IProps {
  score: number;
  width?: number;
  height?: number;
}

const GaugeChart = ({ score, width = 300, height = 300 }: IProps) => {
  return (
    <ReactSpeedometer
      value={score}
      width={width}
      height={height}
      currentValueText="Recommendation"
      customSegmentStops={[0, 333, 666, 1000]}
      customSegmentLabels={[
        {
          text: "Decline",
          position: CustomSegmentLabelPosition.Outside,
          color: "#555",
        },
        {
          text: "Review",
          position: CustomSegmentLabelPosition.Outside,
          color: "#555",
        },
        {
          text: "Approve",
          position: CustomSegmentLabelPosition.Outside,
          color: "#555",
        },
      ]}
    />
  );
};

export default GaugeChart;
