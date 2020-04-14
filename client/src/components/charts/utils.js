export const getLabelsAndValuesForChart = (data) => {
  let labels = [];
  let values = [];
  data.map((item) => {
    labels.push([item[0]]);
    values.push(Math.round([item[1]]));
  });

  return { labels, values };
};
