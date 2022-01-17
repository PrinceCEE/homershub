import { Button as _Button } from "@chakra-ui/react";
import React from "react";

interface Prop {
  text: string;
}

const Button: React.FC<Prop> = ({ text, ...props }) => {
  return (
    <_Button
      {...props}
      textTransform="capitalize"
      color="white"
      bgColor="#D79A2F"
      _hover={{ bgColor: "#d79a2fb3" }}
    >
      {text}
    </_Button>
  );
};

export default Button;
