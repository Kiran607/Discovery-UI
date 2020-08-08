import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core/";
import Drawer from "@material-ui/core/Drawer";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        top: 'auto',
        width: '100%',
        height:'100%',
        backgroundColor:'black',
        boxSizing: "border-box",
        transitionProperty: "width",
        "box-shadow": "border-radius"
      },
      paperAnchorDockedLeft: {
        borderRight: 0
      },
      paperAnchorTop:{
        height:'100%',
      }
    },
    MuiTypography:{
      body1:{
        fontFamily:'serif',
        fontSize:'4rem',
        cursor:'pointer'
      }
      
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default class TopDrawer extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {

    const list =(
      
        <List component="nav">
        <div className="top-drawer">
          <div className="magzine">
           
                <ListItem>
              <ListItemText className="textDrawer" primary="Magazine" />
            </ListItem>
          </div>
          <div className="news-press">
            <ListItem>
              
              <ListItemText className="textDrawer" primary="News And Press" />
            </ListItem>
          </div>
          <div className="foundation">
            <ListItem>
              
              <ListItemText className="textDrawer" primary="Foundation" />
            </ListItem>
          </div>
          <div className="careers">
            <ListItem>
              
              <ListItemText className="textDrawer" primary="Careers" />
            </ListItem>
          </div>
          <div className="contact">
            <ListItem>
              
              <ListItemText className="textDrawer" primary="Contact" />
            </ListItem>
          </div>
        </div>
        </List>
      );
    
    return (
      
      <div>
        <MuiThemeProvider theme={theme}>
          <Drawer variant="persistent" open={this.props.open} 
          anchor="top" 
          id="sideDrawer"
          >
            
             <div className="close"><button type="button" 
             onClick={this.props.handleClose}>
               <CloseIcon className="closeIcon" />
               </button>
               </div>
              {list}
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  } 
}
