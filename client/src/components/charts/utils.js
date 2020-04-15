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
