import { Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Button from "../Button";

const Hero = () => {
  return (
    <Box
      h="75vh"
      backgroundImage="linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url(/assets/hero_bg.png)"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Navbar />
      <Flex justifyContent="center" h="85%">
        <Box w="80%">
          <Flex h="100%" justifyContent="flex-end" alignItems="center">
            <Box maxW="400px" pr="2">
              <Text
                textTransform="uppercase"
                fontSize="24px"
                fontWeight="bold"
                color="#011F0F"
              >
                we concierge services
              </Text>
              <Text mt="4" mb="8">
                Are you in need of home services ? <br />
                Homershub is here to assist and make home services easy for you.
              </Text>
              <Button text="get started" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
