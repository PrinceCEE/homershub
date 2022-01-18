import { Box, Flex, Square, Text, VStack } from "@chakra-ui/react";
import WhatPeopleSayCard from "./WhatPeopleSayCard";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import Container from "../Container";

const WhatPeopleSay = () => {
  return (
    <Box bgColor={"#47A8A7"} p={20}>
      <Container>
        <VStack gap={10}>
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={"24px"}
            color={"white"}
          >
            what people say about us
          </Text>
          <Flex gap={4}>
            <WhatPeopleSayCard
              image="/assets/jane.png"
              alt="jane moore"
              name="jane moore"
              content="Anytime I'm in need of home services, I make use of homershub and they have never disappointed."
            />
            <WhatPeopleSayCard
              image="/assets/monisa.png"
              alt="monisa jones"
              name="monisa jones"
              content="Homershub is the best services render you can think of. And it is very affordable."
            />
            <WhatPeopleSayCard
              image="/assets/alex.png"
              alt="mike alex"
              name="mike alex"
              content="Homershub offers the best services you can think of. Tested and trusted"
            />
          </Flex>
          <Flex gap={2}>
            <Square
              bgColor={"white"}
              size={4}
              p={3}
              _hover={{ cursor: "pointer" }}
            >
              <ArrowLeftIcon />
            </Square>
            <Square
              bgColor={"#D79A2F"}
              size={4}
              p={3}
              _hover={{ cursor: "pointer" }}
            >
              <ArrowRightIcon />
            </Square>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhatPeopleSay;
