import data2 from "../Data/data2";
const data2Config = {
  data: data2,
  GraphType: "Scatter",
  Title: "Religious Weddings In India",
  XAxisLabel: "Years",
  YAxisLabel: "Weddings Count",
  XKey: "Year",
  YKey: "Religious",
  Chart: {
    width: 1000,
    height: 500,
    CircleFill: "purple",
    CircleStroke: "black",
  },
  Margin: {
    top: 60,
    right: 80,
    left: 80,
    bottom: 60,
  },
  NoOfTicks: {
    TicksOnX: 20,
    TicksOnY: 10,
  },
  Other: {
    CircleRadius: 6,
    LabelsFontSize: 18,

    TickLineLength: 5,
  },
  XAxisConfig: {
    XAxisTickDistance: -20,
    XAxisText: 20,
    XAxisLineFill: "none",
    XTickDistance: 20,
    XAxisTickTextColor: "currentColor",
    XAxisLineColor: "currentColor",
    XTickLineLength: 5,
    XAxisTickColor: "currentColor",
  },
  YAxisConfig: {
    YTickDistance: -45,
    YTickLineLength: 5,
    YAxisTextDistance: 20,
    YAxisLineColor: "currentColor",
    YAxisLineFill: "none",
    YAxisTickColor: "currentColor",
    YAxisTickTextColor: "currentColor",
  },
};

export default data2Config;
