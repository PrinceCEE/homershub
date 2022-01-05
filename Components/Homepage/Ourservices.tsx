import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Service from "./Service";
import PaintingIcon from "../Icons/PaintingIcon";
import CookingIcon from "../Icons/CookingIcon";
import LaundryIcon from "../Icons/LaundryIcon";
import ElectricalRepairsIcon from "../Icons/ElectricalRepairsIcon";
import ShoppingIcon from "../Icons/ShoppingIcon";
import CleaningIcon from "../Icons/CleaningIcon";

const OurServices = () => {
  return (
    <Box>
      <Text>our services</Text>
      <SimpleGrid>
        <Service
          icon={<PaintingIcon />}
          title="painting"
          content="We offer painting services at a very affordable price. We are always available and ready to deliver."
        />
        <Service
          icon={<CookingIcon />}
          title="cooking"
          content="We offer cooking services at a very affordable price. We are always available and ready to deliver."
        />
        <Service
          icon={<LaundryIcon />}
          title="laundry"
          content="We offer laundry services at a very affordable price. We are always available and ready to deliver."
        />
        <Service
          icon={<ElectricalRepairsIcon />}
          title="electrical repairs"
          content="We offer electrical repair services at a very affordable price. We are always available and ready to deliver."
        />
        <Service
          icon={<ShoppingIcon />}
          title="shopping"
          content="We offer shopping services at a very affordable price. We are always available and ready to deliver."
        />
        <Service
          icon={<CleaningIcon />}
          title="cleaning"
          content="We offer cleaning services at a very affordable price. We are always available and ready to deliver."
        />
      </SimpleGrid>
    </Box>
  );
};

export default OurServices;
