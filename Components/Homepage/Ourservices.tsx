import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Service from "./Service";
import PaintingIcon from "../Icons/PaintingIcon";
import CookingIcon from "../Icons/CookingIcon";
import LaundryIcon from "../Icons/LaundryIcon";
import ElectricalRepairsIcon from "../Icons/ElectricalRepairsIcon";
import ShoppingIcon from "../Icons/ShoppingIcon";
import CleaningIcon from "../Icons/CleaningIcon";
import Container from "../Container";

const OurServices = () => {
  return (
    <Container my="10">
      <Box>
        <Text
          textAlign="center"
          my="8"
          fontSize="24px"
          textTransform="uppercase"
          fontWeight="bold"
        >
          our services
        </Text>
        <SimpleGrid
          columns={2}
          spacingX={12}
          spacingY={8}
          maxW="760px"
          mx="auto"
        >
          <Service
            icon={<PaintingIcon boxSize="10" />}
            title="painting"
            content="We offer painting services at a very affordable price. We are always available and ready to deliver."
          />
          <Service
            icon={<CookingIcon boxSize="10" />}
            title="cooking"
            content="We offer cooking services at a very affordable price. We are always available and ready to deliver."
          />
          <Service
            icon={<LaundryIcon boxSize="10" />}
            title="laundry"
            content="We offer laundry services at a very affordable price. We are always available and ready to deliver."
          />
          <Service
            icon={<ElectricalRepairsIcon boxSize="10" />}
            title="electrical repairs"
            content="We offer electrical repair services at a very affordable price. We are always available and ready to deliver."
          />
          <Service
            icon={<ShoppingIcon boxSize="10" />}
            title="shopping"
            content="We offer shopping services at a very affordable price. We are always available and ready to deliver."
          />
          <Service
            icon={<CleaningIcon boxSize="10" />}
            title="cleaning"
            content="We offer cleaning services at a very affordable price. We are always available and ready to deliver."
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default OurServices;
