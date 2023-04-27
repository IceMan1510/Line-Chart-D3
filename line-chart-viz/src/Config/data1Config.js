import data1 from "../Data/data1";

const data1Config = {
  data: data1,
  GraphType: "Line",
  Title: "Religious Weddings In India",
  XAxisLabel: "Years",
  YAxisLabel: "Weddings Count",
  XKey: "Year",
  YKey: "Religious",
  Chart: {
    CircleFill: "#FF6969",
    CircleStroke: "black",
    LineFill: "none",
    LineStroke: "black",
    width: 1000,
    height: 500,
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

    XTickLineLength: 5,
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

export default data1Config;
