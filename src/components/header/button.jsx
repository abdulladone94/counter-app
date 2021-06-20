import { Button } from "@material-ui/core";
import React,{useState} from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "../header/body.styles";

const Buttons = ({ variant, color = "secondary", name, handleDelete, id }) => {
  const classes = useStyles();

  const [count, setCount] = useState(0)
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }


  
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ marginLeft: 150 }}
      >
        {count}
      </Button>

      <Button>
        <AddCircleOutlineIcon
          className={classes.icn}
          color="primary"
          onClick={handleIncrement}
        />
      </Button>

      <Button>
        <RemoveCircleOutlineIcon
          onClick={handleDecrement}
          className={classes.icn}
          color="primary"
        />
      </Button>

      <Button>
        <DeleteIcon
          className={classes.icn}
          variant={variant}
          color={color}
          name={name}
          onClick={()=> {handleDelete(id)}}
        />
      </Button>
    </div>
  );
};

export default Buttons;
