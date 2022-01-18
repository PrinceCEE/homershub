import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface Props {
  children?: React.ReactElement;
  [x: string]: any;
}

const Container: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Flex justifyContent="center" {...props}>
      <Box w="80%">{children}</Box>
    </Flex>
  );
};

export default Container;
