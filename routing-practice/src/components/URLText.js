import React from "react";
import { useParams } from "react-router-dom";

const URLText = (props) => {
  const { text, color, bgColor } = useParams();

  const checkForNumber = (input) => {
    const nums = "0123456789";
    for (let integer of input) if (nums.includes(integer)) return true;
    return false;
  };

  const result = (text) => {
    if (isNaN(text)) {
      if (checkForNumber(text))
        return (
          <h1 style={color ? { color: color, backgroundColor: bgColor } : null}>
            The input display is: {text}
          </h1>
        );
      else
        return (
          <h1 style={color ? { color: color, backgroundColor: bgColor } : null}>
            The word is: {text}
          </h1>
        );
    }
    return <h1>The number is: {text}</h1>;
  };

  return <div>{result(text)}</div>;
};

export default URLText;
