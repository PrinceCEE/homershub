import { Flex, VStack, Text, Box, HStack } from "@chakra-ui/react";
import AuthContainer from "../Components/Auth/AuthContainer";
import HomeIcon from "../Components/Icons/HomeIcon";
import DropletIcon from "../Components/Icons/DropletIcon";

const SignIn = () => {
  return (
    <AuthContainer>
      <Flex
        w="35%"
        bgColor={"#47A8A7"}
        h="100%"
        color={"white"}
        textTransform={"capitalize"}
        fontWeight="900"
        fontSize={"4xl"}
        p={4}
        flexDir={"column"}
      >
        <Flex alignItems={"flex-end"} gap={1}>
          <HomeIcon boxSize={6} />
          <Text lineHeight={"1em"} fontWeight={"bold"} fontSize={"16px"}>
            homershub
          </Text>
        </Flex>
        <VStack flex="auto" justifyContent={"center"}>
          <Box pb={24}>
            <Text>hello...</Text>
            <Text>welcome</Text>
            <Text>back!!!</Text>
            <Flex justifyContent={"center"} mt={4}>
              <DropletIcon />
            </Flex>
          </Box>
        </VStack>
      </Flex>
      <Box w="65%" bgColor={"blue"} h="100%"></Box>
    </AuthContainer>
  );
};

export default SignIn;
