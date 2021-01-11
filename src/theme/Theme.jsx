import { createMuiTheme } from "@material-ui/core/styles";

const grey = "#54585a";
const white = "#ffffff";

export default createMuiTheme({
  palette: {
    primary: {
      main: grey
    },
    secondary: {
      main: white
    }
  },
  typography: {
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: white
    },
  },
  overrides: {
    MuiPaper :{
      root: {
        boxShadow: "none !important"
      },
    },
    MuiTableCell: {
      root: {
        border: `1px solid ${grey}`,
      },
    },
    MuiTableRow:{
      root: {
        '& > *': {
          borderBottom: 'unset',
        },
      },
    }
  },
  
});
