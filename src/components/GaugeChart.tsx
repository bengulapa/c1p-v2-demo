import ReactSpeedometer, {
  CustomSegmentLabelPosition,
} from "react-d3-speedometer";
import { Color } from "../styles/colors";

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
  width = 100,
  height = 100,
  fontSize = "12px",
}: IProps) => {
  const customSegmentLabels = [
    {
      text: "Decline",
      position: CustomSegmentLabelPosition.Inside,
      color: "transparent",
    },
    {
      text: "Review",
      position: CustomSegmentLabelPosition.Inside,
      color: "transparent",
    },
    {
      text: "Approve",
      position: CustomSegmentLabelPosition.Inside,
      color: "transparent",
    },
  ];

  return (
    <ReactSpeedometer
      value={score}
      width={width}
      height={height}
      currentValueText="&nbsp;"
      valueTextFontSize={fontSize}
      maxSegmentLabels={0}
      customSegmentStops={[0, 333, 666, 1000]}
      segmentColors={[Color.red, Color.darkOrange, Color.green]}
      customSegmentLabels={showLabels ? customSegmentLabels : []}
      ringWidth={10}
      needleHeightRatio={0.6}
      needleColor={Color.darkOrange}
    />
  );
};

export default GaugeChart;
