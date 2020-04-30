import React from "react";
import { Loader } from "semantic-ui-react";

const MyLoader = ({ message }) => {
  return (
    <div>
      <Loader active inline="centered">
        {message}
      </Loader>
    </div>
  );
};

export default MyLoader;
