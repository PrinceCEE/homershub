import { VStack, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface Props {
  image: string;
  name: string;
  content: string;
  alt: string;
}

const WhatPeopleSayCard: React.FC<Props> = ({ image, alt, name, content }) => {
  return (
    <VStack
      gap={2}
      bgColor={"white"}
      border="2px solid #CACACA"
      px={4}
      py={8}
      w="33%"
      textAlign={"center"}
    >
      <Avatar src={image} alt={alt} />
      <Text textTransform={"capitalize"} fontWeight={"bold"}>
        {name}
      </Text>
      <Text>{content}</Text>
    </VStack>
  );
};

export default WhatPeopleSayCard;
