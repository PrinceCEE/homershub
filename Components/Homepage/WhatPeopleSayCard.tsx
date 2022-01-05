import { VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {
  image: StaticImageData;
  name: string;
  content: string;
  alt: string;
}

const WhatPeopleSayCard: React.FC<Props> = ({ image, alt, name, content }) => {
  return (
    <VStack>
      <Image src={image} alt={alt} />
      <Text>{name}</Text>
      <Text>{content}</Text>
    </VStack>
  );
};

export default WhatPeopleSayCard;
