import React,{useState} from "react";
import Buttons from "./button";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import LoopIcon from '@material-ui/icons/Loop';
import RefreshIcon from '@material-ui/icons/Refresh';
import { useStyles } from "./body.styles";



const Body = () => {

    

    const classes = useStyles()

    const [buttons, setButtons] = useState([{id:1}, {id:2}, {id:3}, {id:4}])
    
    const handleDelete  = (id)=> {
      setButtons(buttons.filter((btn)=>{
         return btn.id !== id
    }))

    }

    

    return (
      <div>
        <Box marginLeft='150px'>
            <Button> <LoopIcon className={classes.icn} /> </Button>
            <Button> <RefreshIcon className={classes.icn} /> </Button>
        </Box>
         
        {buttons.map((btn)=>{
          return <Buttons 
          key={btn.id}
          handleDelete={handleDelete}
          id = {btn.id}


          />
        })}
        
      </div>

    )
}



export default Body