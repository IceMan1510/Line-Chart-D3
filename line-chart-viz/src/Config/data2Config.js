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
  OtherLengths: {
    CircleRadius: 6,
    LabelsFontSize: 18,
    YTickDistance: -45,
    XTickDistance: 20,
    TickLineLength: 5,
  },
  AxisParameters: {},
};

export default data2Config;
