import React from "react";
import ReactSpeedometer, {
  CustomSegmentLabelPosition,
} from "react-d3-speedometer";

interface IProps {
  score: number;
  width?: number;
  height?: number;
  showLabels?: boolean;
  fontSize?: string;
}

const GaugeChart = ({
  score,
  showLabels = false,
  width = 300,
  height = 300,
  fontSize = "12px",
}: IProps) => {
  const customSegmentLabels = [
    {
      text: "Decline",
      position: CustomSegmentLabelPosition.Outside,
      color: "#555",
      fontSize: fontSize,
    },
    {
      text: "Review",
      position: CustomSegmentLabelPosition.Outside,
      color: "#555",
      fontSize: fontSize,
    },
    {
      text: "Approve",
      position: CustomSegmentLabelPosition.Outside,
      color: "#555",
      fontSize: fontSize,
    },
  ];

  return (
    <ReactSpeedometer
      value={score}
      width={width}
      height={height}
      currentValueText="Recommendation"
      valueTextFontSize={fontSize}
      maxSegmentLabels={0}
      customSegmentStops={[0, 333, 666, 1000]}
      customSegmentLabels={showLabels ? customSegmentLabels : []}
    />
  );
};

export default GaugeChart;
