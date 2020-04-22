import _ from "lodash";

export const getLabelsAndValuesForChart = (data) => {
  let labels = [];
  let values = [];

  _.map(data, (item) => {
    labels.push([item[0]]);
    values.push(Math.round([item[1]]));
  });

  return { labels, values };
};

export const getMonths = (data) => {
  let labels = [];
  let values = [];

  _.map(data, (item) => {
    labels.push([item[0]]);
    values.push(Math.round([item[1]]));
  });

  return { labels, values };
};

export const sortDates = (dates) => {
  return dates.sort(function (a, b) {
    a = a.split("-");
    b = b.split("-");
    return parseInt(b[1]) < parseInt(a[1])
      ? 1
      : parseInt(b[1]) > parseInt(a[1])
      ? -1
      : parseInt(b[0]) < parseInt(a[0])
      ? 1
      : -1;
  });
};

export const MONTHLY_INCOME = [
  22462,
  21320,
  22277,
  21894,
  22130,
  21993,
  22408,
  21878,
  22211,
  36548,
  22855,
  23437,
  24437,
];
