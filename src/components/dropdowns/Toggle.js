// import React from "react";
// import { Checkbox } from "semantic-ui-react";

// const Toggle = (multiple) => {

//   const handleToggleChange = (e, data) => {
//     e.preventDefault();
//     setToggle(data.checked);
//     if (data.checked) {
//       setDefaultValue(
//         _.map(options, (item) => {
//           return item.value;
//         })
//       );
//     } else {
//       setDefaultValue([]);
//       cleanSelectedMonths();
//     }
//   };

//   const [toggle, setToggle] = useState(false);

//   if (!multiple) {
//     return (
//       <div>
//         <h4>toggle disabled</h4>
//         <Checkbox toggle disabled onChange={handleToggleChange}></Checkbox>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <h4>Select all</h4>
//       <Checkbox toggle onChange={handleToggleChange}></Checkbox>
//     </div>
//   );
// };

// export default Toggle;
