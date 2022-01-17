import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import WhatPeopleSayCard from "./WhatPeopleSayCard";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import jane from "../../assets/jane.png";
import monisa from "../../assets/monisa.png";
import alex from "../../assets/alex.png";

const WhatPeopleSay = () => {
  return (
    <VStack>
      <Text>what people say about us</Text>
      <Flex>
        {/* <WhatPeopleSayCard
          image={jane}
          alt="jane moore"
          name="jane moore"
          content="Anytime I'm in need of home services, I make use of homershub and they have never disappointed."
        />
        <WhatPeopleSayCard
          image={monisa}
          alt="monisa jones"
          name="monisa jones"
          content="Homershub is the best services render you can think of. And it is very affordable."
        />
        <WhatPeopleSayCard
          image={alex}
          alt="mike alex"
          name="mike alex"
          content="Homershub offers the best services you can think of. Tested and trusted"
        /> */}
      </Flex>
      <Flex>
        <Box>
          <ArrowLeftIcon />
        </Box>
        <Box>
          <ArrowRightIcon />
        </Box>
      </Flex>
    </VStack>
  );
};

export default WhatPeopleSay;
