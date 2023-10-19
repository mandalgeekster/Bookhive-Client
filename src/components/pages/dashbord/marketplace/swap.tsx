"use client";
import BookShowcaseBox from "@/components/molecules/dashboard/marketplace/swapBox";
import React, { Fragment } from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import DrawerContainer from "@/layouts/popups/appDrawerLayout";

const MarketplaceSwap = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Box display="flex" flexWrap={"wrap"} gap={["1em", "2em"]}>
      {[1, 1, 1, 1, 1, 1].map((item, key) => {
        return (
          <Fragment key={key}>
            <BookShowcaseBox action={() => alert(0)} />
          </Fragment>
        );
      })}

      <DrawerContainer isOpen={isOpen} onClose={onClose}>
        itesm
      </DrawerContainer>
    </Box>
  );
};

export default MarketplaceSwap;
