import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Hero from "../Components/Homepage/Hero";
import OurServices from "../Components/Homepage/Ourservices";
import WhatPeopleSay from "../Components/Homepage/WhatPeopleSay";
import HomepageFooter from "../Components/Homepage/HomepageFooter";

const Index: NextPage = () => {
  return (
    <Box>
      <Hero />
      <OurServices />
      <WhatPeopleSay />
      <HomepageFooter />
    </Box>
  );
};

export default Index;
