import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  customHoverFocus: {
    "&:hover": { backgroundColor: "yellow" }
  }
}));

function IconButtons() {
  const classes = useStyles();
  return (
    <div>
        <IconButton className={classes.customHoverFocus}></IconButton>
    </div>
  );
}

export default IconButtons