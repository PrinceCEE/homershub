import { Box, Flex, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import HomeIcon from "./Icons/HomeIcon";
import Button from "./Button";
import Container from "./Container";

const style = css`
  color: #011f0f;
  font-weight: 400;
  &:hover {
    border-bottom: 2px solid #011f0f;
  }
`;

const Navbar = () => {
  return (
    <Box py="4" h="15%">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex gap="2px" alignItems="flex-start">
            <HomeIcon />
            <Text
              color="white"
              lineHeight="1em"
              fontWeight="500"
              as="a"
              href="/"
            >
              Homershub
            </Text>
          </Flex>
          <Flex gap="8" alignItems="center">
            <Text as="a" href="/" css={style}>
              Home
            </Text>
            <Text as="a" href="#" css={style}>
              About Us
            </Text>
            <Text as="a" href="#services" css={style}>
              Services
            </Text>
            <Text as="a" href="#" css={style}>
              Contact Us
            </Text>
            <Button text="sign up" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
