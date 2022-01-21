import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import CallIcon from "../Icons/CallIcon";
import EmailIcon from "../Icons/EmailIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import HomeIcon from "../Icons/HomeIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import Container from "../Container";

const HomepageFooter = () => {
  return (
    <Box py={"8"}>
      <Container>
        <>
          <Flex
            borderBottom="0.8px solid #CACACA"
            mb="4"
            justifyContent={"space-between"}
            py="10"
          >
            <VStack alignItems="flex-start">
              <Flex gap="2px" alignItems="flex-start" as="a" href="/">
                <HomeIcon color="black" />
                <Text lineHeight="1em" fontWeight={"bold"}>
                  Homershub
                </Text>
              </Flex>
              <Text>A company that provides concierge services to all.</Text>
              <Flex gap={2}>
                <Flex
                  bgColor="#1A1A1A"
                  h="6"
                  w="6"
                  borderRadius="50%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TwitterIcon boxSize="3" />
                </Flex>
                <Flex
                  bgColor="#1A1A1A"
                  h="6"
                  w="6"
                  borderRadius="50%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FacebookIcon boxSize="3" />
                </Flex>
                <Flex
                  bgColor="#1A1A1A"
                  h="6"
                  w="6"
                  borderRadius="50%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <LinkedInIcon boxSize="3" />
                </Flex>
                <Flex
                  bgColor="#1A1A1A"
                  h="6"
                  w="6"
                  borderRadius="50%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <InstagramIcon boxSize="3" />
                </Flex>
              </Flex>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Text fontWeight={"bold"}>Locations</Text>
              <Text>Enugu</Text>
              <Text>Abuja</Text>
              <Text>Kogi</Text>
              <Text>Lagos</Text>
              <Text>Ogun</Text>
              <Text>Kaduna</Text>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Text fontWeight={"bold"}>About us</Text>
              <Text>Blog</Text>
              <Text>Career</Text>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Text fontWeight={"bold"}>Resources</Text>
              <Text>Our work</Text>
              <Text>Services</Text>
              <Text>FAQ</Text>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Text fontWeight={"bold"}>Contact us</Text>
              <HStack>
                <Flex
                  bgColor="#1A1A1A"
                  h="6"
                  w="6"
                  borderRadius="50%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CallIcon boxSize="3" />
                </Flex>
                <Text>0706701740</Text>
              </HStack>
              <HStack>
                <Flex
                  bgColor="#1A1A1A"
                  h="6"
                  w="6"
                  borderRadius="50%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <EmailIcon boxSize="3" />
                </Flex>
                <Text>info@homershub.com</Text>
              </HStack>
            </VStack>
          </Flex>
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
        </>
      </Container>
    </Box>
  );
};

export default HomepageFooter;
