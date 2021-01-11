import { createMuiTheme } from "@material-ui/core/styles";

const grey = "#54585a";
const white = "#ffffff";
const blue = "#398ac8";

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
    h4: {
      fontWeight: "bold",
      fontFamily: "Raleway",
      paddingLeft: 16
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: white
    },
  },
  overrides: {
    MuiIconButton:{
      root:{
        color: blue
      }
    },
    MuiPaper :{
      root: {
        boxShadow: "none !important"
      },
      rounded: {
        borderRadius: 0
      }
    },
    MuiTableCell: {
      root: {
        border: `1px solid ${grey}`,
        fontSize: 12,
        fontFamily: 'Raleway',
        padding: 10
      },
      head: {
        fontWeight: "bold",
      }
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
