import data3 from "../Data/data3";
const data3Config = {
  data: data3,
  GraphType: "Bar",
  Title: "Population Data",
  XAxisLabel: "Countries",
  YAxisLabel: "Population",
  XKey: "country",
  YKey: "population",
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

export default data3Config;
