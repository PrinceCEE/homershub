import { VStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  icon: React.ReactElement;
  title: string;
  content: string;
}

const Service: React.FC<Props> = ({ icon, title, content }) => {
  return (
    <VStack>
      {icon}
      <Text>{title}</Text>
      <Text>{content}</Text>
    </VStack>
  );
};

export default Service;
