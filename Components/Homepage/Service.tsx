import { VStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  icon: React.ReactElement;
  title: string;
  content: string;
}

const Service: React.FC<Props> = ({ icon, title, content }) => {
  return (
    <VStack
      borderRadius="20px"
      p="10"
      boxShadow=" 0px 0.5px 4px rgba(0, 0, 0, 0.25)"
      gap={8}
    >
      {icon}
      <VStack gap={2}>
        <Text
          textAlign={"center"}
          color={"#000000"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
        >
          {title}
        </Text>
        <Text textAlign={"center"} color={"#717E95"}>
          {content}
        </Text>
      </VStack>
    </VStack>
  );
};

export default Service;
