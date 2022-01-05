import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import CallIcon from "../Icons/CallIcon";
import EmailIcon from "../Icons/EmailIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import HomeIcon from "../Icons/HomeIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";

const HomepageFooter = () => {
  return (
    <Box>
      <VStack>
        <Flex>
          <VStack>
            <Flex>
              <HomeIcon />
              <Text>Homershub</Text>
            </Flex>
            <Text>A company that provides concierge services to all.</Text>
            <Flex>
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </Flex>
          </VStack>
          <VStack>
            <Text>Locations</Text>
            <Text>Enugu</Text>
            <Text>Abuja</Text>
            <Text>Kogi</Text>
            <Text>Lagos</Text>
            <Text>Ogun</Text>
            <Text>Kaduna</Text>
          </VStack>
          <VStack>
            <Text>About us</Text>
            <Text>Blog</Text>
            <Text>Career</Text>
          </VStack>
          <VStack>
            <Text>Resources</Text>
            <Text>Our work</Text>
            <Text>Services</Text>
            <Text>FAQ</Text>
          </VStack>
          <VStack>
            <Text>Contact us</Text>
            <HStack>
              <Box>
                <CallIcon />
              </Box>
              <Text>0706701740</Text>
            </HStack>
            <HStack>
              <Box>
                <EmailIcon />
              </Box>
              <Text>info@homershub.com</Text>
            </HStack>
          </VStack>
        </Flex>
      </VStack>
      <Flex direction="column">
        <Text>all rights reserved</Text>
        <Flex>
          <Text>Copyright@homershub</Text>
          <Box>
            <Text>Privacy policy</Text>
            <Divider />
            <Text>Cookie policy</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomepageFooter;
