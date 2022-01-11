import Grid from "@mui/material/Grid";
import * as React from "react";
import { makeStyles } from "@mui/styles";

import Heading from '../common/Heading';
import D_genoios from "../../img/Director General OIOS.jpeg";
import D_cd from "../../img/Director (Creativity and Designing).jpg";
import usg_cd from "../../img/USG (Creativity and Designing).jpg";
import { useState } from "react";
import dummy from "../../img/d1.jpg";
import Container from "react-bootstrap/Container";
import CardComponent from "../common/card";
import CardComponent2 from "../common/card2";
import usg_dm from "../../img/USG(Digital Marketing).jpg";
import D_dm from "../../img/Director(DigitalMarketing).jpg";


const useStyles = makeStyles({
    gridContainer: {
      left: 0,
      top: 0,
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    root: {
      minWidth: 340,
      maxWidth: 340,
      transition: "transform 0.15s ease-in-out",
    },
    cardHovered: {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  });

function DmTeam() {
    
const dmteam=[
    {
      name:"E Swarup Kumar",
      img:usg_dm,
      desg:"Under Secretary General"
    },
    {
      name:"Swaugat Beura",
      img:D_dm,
      desg:"Director"
    }
  ];
  const classes = useStyles();
  const clickMe = (event) => {
    console.log(event);
  };
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });
    return (
        <div >
            <Heading head="Digital Marketing" />
            <Container fluid m={4}>
                <Grid container spacing={6} className={classes.gridContainer}>
                    <CardComponent2 details={dmteam}/>  
                </Grid>
            </Container>
            
        </div>
    )
}

export default DmTeam;