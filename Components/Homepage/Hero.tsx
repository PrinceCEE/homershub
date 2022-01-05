import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <Box>
      <Navbar />
      <Flex>
        <Box>
          <Text>we concierge services</Text>
          <Text>
            Are you in need of home services ? <br />
            Homershub is here to assist and make home services easy for you.
          </Text>
          <Button>Get Started</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
