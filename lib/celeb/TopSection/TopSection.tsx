import Image from "next/image";
import React from "react";
import { sanityImage } from "~/lib/components/sanityio";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Box, Typography } from "@mui/material";
import person from "../././././";

export const TopSection = () => {
  const context = useCelebContext();

  const picture = context.celeb.picture || context.placeholderImage;

  return (
    <div
      style={{
        background:
          "linear-gradient(113.76deg, #FDFFA7 31.21%, rgba(86, 164, 117, 0.11) 97.49%, rgba(196, 196, 196, 0) 135.81%)",
      }}
    >
      {/* <section> */}
      <header
        style={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            textAlign: "center",
            padding: "10px 10px 0px 10px",
          }}
        >
          <Image
            blurDataURL={picture.metadata.lqip}
            placeholder="blur"
            src={"/images/person.png"}
            width={600}
            height={550}
            priority
            alt={context.celeb.name}
          />
          <Box>
            <Typography variant="h6">
              Religion, politics, and ideas of
            </Typography>
            <h2>{context.celeb.name}</h2>
          </Box>
        </Box>
      </header>
      {/* </section> */}
    </div>
  );
};
