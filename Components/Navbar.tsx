import { Box, Button, Flex, Text } from "@chakra-ui/react";
import HomeIcon from "./Icons/HomeIcon";

const Navbar = () => {
  return (
    <Box>
      <Flex>
        <Flex>
          <HomeIcon />
          <Text>Homershub</Text>
        </Flex>
        <Flex>
          <Text>Home</Text>
          <Text>About Us</Text>
          <Text>Services</Text>
          <Text>Contact Us</Text>
          <Button>Sign Up</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
