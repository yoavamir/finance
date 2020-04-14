const selectColor = (number) => {
  const hue = number * 137.508; // use golden angle approximation
  return `hsl(${hue},50%,75%)`;
};

export const getColors = (numOfColors) => {
  let colors = [];
  for (let i = 0; i < numOfColors; i++) {
    colors.push(selectColor(i));
  }
  return colors;
};

const dynamicColors = () => {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
};

export const getDynamicColors = (numOfColors) => {
  let colors = [];
  for (let i = 0; i < numOfColors; i++) {
    colors.push(dynamicColors());
  }
  return colors;
};

export const getFixedColors = () => {
  return [
    "#488f31",
    "#3ca157",
    "#2eb27c",
    "#25c2a0",
    "#30d2c3",
    "#4ce0e3",
    "#6feeff",
    "#1bdaff",
    "#00c4ff",
    "#00adff",
    "#0094fa",
    "#007af0",
    "#0b5cde",
    "#5872e2",
    "#7f8ae6",
    "#9ea2e9",
    "#bbbcec",
    "#d6d6ee",
    "#f1f1f1",
    "#f1e5d1",
    "#f0d9b3",
    "#eece94",
    "#eac375",
    "#e4b855",
    "#dead31",
  ];
};
