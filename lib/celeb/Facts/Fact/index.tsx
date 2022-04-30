import Link from "next/link";
import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact as TFact } from "~/lib/components/types";
import { Card, Typography, Box, Grid, Divider } from "@mui/material";
import { fontWeight, spacing } from "@mui/system";

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();

  return (
    <Box sx={{ padding: "10px 0px " }}>
      <Grid container>
        <Grid
          item
          sm={12}
          md={10}
          lg={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: "0 auto",
          }}
        >
          <Typography
            display="flex"
            variant="h2"
            width="100%"
            sx={{
              fontSize: "22px",
              background: "rgba(253, 255, 167, 1)",
              padding: "6px",
              display: "flex",
              justifyContent: "center",
              fontWeight: "600",
            }}
          >
            {value.tags[0].tag.name}
          </Typography>

          <Box>
            <div>
              <Typography
                sx={{
                  color: "background: rgba(0, 0, 0, 0.7)",
                  marginLeft: "4px",
                  marginTop: "6px",
                }}
              >
                {value.date}
              </Typography>
            </div>
            {(value.type === "quote" && (
              <div>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "22px", fontWeight: "500" }}
                >
                  {value.context}, {name} said
                </Typography>

                <p>{value.quote}</p>
              </div>
            )) ||
              (value.type == "fact" && (
                <div>
                  <p>{value.content}</p>
                </div>
              ))}
          </Box>

          <Box sx={{ display: "flex" }}>
            {value.tags.map((t) => {
              return (
                <p key={t.tag.name}>
                  # {" " + t.isLowConfidence && "Possibly "}
                  {t.tag.name}
                </p>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "15px",
              marginBottom: "10px",
            }}
          >
            <Box sx={{ marginRight: "12px" }}>
              <Link href={value.source}> Source </Link>
            </Box>

            <Box sx={{ marginRight: "12px" }}>
              <Link href={value.forumLink}>Forum link</Link>
            </Box>
          </Box>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );
};
