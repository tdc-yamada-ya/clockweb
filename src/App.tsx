import { Global } from "@emotion/react";
import { Fragment } from "react";
import { DSEG } from "./DSEG";
import { useClock } from "./hooks/useClock";

export const App = () => {
  const c = useClock();
  const p = (v: number) => v.toString().padStart(2, "0");

  return (
    <Fragment>
      <Global
        styles={{
          html: {
            height: "100%",
          },
          body: {
            background: "#222",
            color: "#fff",
            height: "100%",
            margin: 0,
          },
          "#root": {
            height: "100%",
          },
        }}
      />
      <div
        css={{
          alignItems: "center",
          display: "flex",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <div
          css={{
            background: "rgba(0, 0, 0, 0.8)",
            fontSize: "80vh",
          }}
        >
          <DSEG
            color="#FDD835"
            value={
              p(c.hours) + (c.seconds % 2 === 0 ? ":" : " ") + p(c.minutes)
            }
          />
        </div>
      </div>
    </Fragment>
  );
};
