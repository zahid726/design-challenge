import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Chip, Box } from "@mui/material";

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <div>
      <Box
        sx={{
          // width: "80%",
          // justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          padding: "10px 10px 0px 10px",
        }}
      >
        {tags.regular.map((t) => (
          // <div key={t.tag.name}>{t.tag.name}</div>

          <Chip
            sx={{ padding: "8px", margin: "10px" }}
            key={t.tag.name}
            label={t.tag.name}
            variant="outlined"
          />
        ))}
      </Box>

      {tags.lowConfidence.length > 0 && (
        <Box
          sx={{
            alignItems: "center",
            textAlign: "center",
            padding: "10px 10px 0px 10px",
          }}
        >
          <p>Maybe</p>
          {tags.lowConfidence.map((t) => (
            <Chip
              sx={{ padding: "8px", margin: "10px" }}
              key={t.tag.name}
              label={t.tag.name}
              variant="outlined"
            />
          ))}
        </Box>
      )}
    </div>
  );
};
