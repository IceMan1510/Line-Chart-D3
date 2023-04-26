import data3 from "../Data/data3";
const data3Config = {
  data: data3,
  GraphType: "Bar",
  Title: "Covid Death Data Jan (2021)",
  XAxisLabel: "Countries",
  YAxisLabel: "Population",
  XKey: "country",
  YKey: "population",
  Chart: {
    width: 1000,
    height: 500,
    SquareFill: "#1DA1F2",
    SquareStroke: "black",
  },
  Margin: {
    top: 60,
    right: 80,
    left: 80,
    bottom: 60,
  },
  NoOfTicks: {
    TicksOnY: 10,
  },
  Other: {
    CircleRadius: 6,
    LabelsFontSize: 18,
  },
  XAxisConfig: {
    XTickDistance: 20,
    XTickLineLength: 0,
    XAxisTickDistance: 0,
    XAxisText: 20,
    XAxisLineFill: "none",
    XAxisTickTextColor: "currentColor",
    XAxisLineColor: "currentColor",
    XAxisTickColor: "currentColor",
  },
  YAxisConfig: {
    YTickDistance: -50,
    YTickLineLength: 5,
    YAxisTextDistance: 20,
    YAxisLineColor: "currentColor",
    YAxisLineFill: "none",
    YAxisTickColor: "currentColor",
    YAxisTickTextColor: "currentColor",
  },
};

export default data3Config;
