import { Flex, Box } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  [key: string]: any;
}

const AuthContainer: FC<Props> = ({ children }) => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} w="100%" h="100vh">
      <Box
        minW={"960px"}
        h="70vh"
        boxShadow="0px 20px 60px rgba(192, 192, 191, 0.3);"
        display={"flex"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default AuthContainer;
