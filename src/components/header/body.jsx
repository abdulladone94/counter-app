import React, { useState } from "react";
import Buttons from "./button";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LoopIcon from "@material-ui/icons/Loop";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useStyles } from "./body.styles";

const Body = () => {
  const classes = useStyles();
  const initialState = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [buttons, setButtons] = useState(initialState);

  const handleDelete = (id) => {
    setButtons(
      buttons.filter((btn) => {
        return id !== btn.id;
      })
    );
  };

  const handleRefresh = () => {
    if (buttons.length === 0) {
      setButtons(initialState);
    }
  };

  const [resetClicked, setResetClicked] = useState(false);

  return (
    <div>
      <Box marginLeft="150px">
        <Button
          onClick={() => {
            setResetClicked(true);
          }}
        >
          <LoopIcon className={classes.icn} />
        </Button>

        <Button onClick={handleRefresh}>
          <RefreshIcon className={classes.icn} />
        </Button>
      </Box>

      {buttons.map((btn) => {
        return (
          <Buttons
            key={btn.id}
            handleDelete={handleDelete}
            id={btn.id}
            resetClicked={resetClicked}
            setResetClicked={setResetClicked}
          />
        );
      })}
    </div>
  );
};

export default Body;
