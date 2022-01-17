import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactElement;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <Flex justifyContent="center">
      <Box w="80%">{children}</Box>
    </Flex>
  );
};

export default Container;
