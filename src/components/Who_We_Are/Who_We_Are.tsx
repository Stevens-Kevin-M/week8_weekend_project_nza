import React from 'react';
import { makeStyles } from '@material-ui/core';
import placeholder from '../../assets/images/Imagefile.png';
import login from '../../assets/images/login.png';
import trees from '../../assets/images/nza_slideshow.jpg';
import wood from '../../assets/images/nza_background.jpg';

interface Props{
    title: string
}

const useStyles = makeStyles({
  body:{
    gridArea: "body",
    width: "90%",
    margin:"10px auto 0 auto",
    display: "grid",
    gridTemplateColumns: "20% 60% 20%",
    gridTemplateRows: "75% 25%",
    gridTemplateAreas:
    '"middle middle sidebar_right "\r\n    "middle middle sidebar_text"'
  },

  sidebar_right:{
    gridArea: "sidebar_right",
    backgroundColor: "hsl(14, 82%, 26%)",
    color: "white",
    overflowY: "auto",
    marginLeft:'20px',
    paddingLeft: "20px",
    paddingRight: "20px",
    fontSize: "small",
    height: "80%"
  },

  newsfeed: { textDecoration: "underline",
  },

  sidebar_text: {
    display: "block",
    gridArea: "sidebar_text",
  },

  middle: { 
    gridArea: "middle",
    paddingLeft:"0",
    "& h3":{marginLeft: "10px" },
    "& p":{marginLeft: "10px" }
    },

    responsive: { width: "100%", height: "70%", marginRight: "20px" 
    },
    root: {
      margin: "0",
      padding: "0",
      backgroundImage:
        'url("https://thedesignest.net/wp-content/uploads/2019/06/Light-Brown-Wooden-Texture.jpg")',
      fontFamily: "Arial, Helvetica, sans-serif"
    },
    NavTop: {
      gridArea: "NavTop",
      display: "flex",

      width: "90%",
      margin:'0 auto 0 auto',
      justifyContent: "space-between"
    },
    loginbutton: {
      cssFloat: "right",
      alignSelf: "end",
      height: "40px",
      borderBottomLeftRadius: "6px",
      borderBottomRightRadius: "6px"
    },
    sampleimage: {
      display: "inline-flex",
      gridArea: "header1",
      height: "75px",
      width: "300px",
      alignSelf: "flex-end"
    },
    NavUnder:{
      gridArea: "NavUnder",
      display: "flex",
      width: "90%",
      margin: "auto auto",
      padding: "15px 0",
  
      borderTop: "3px solid black",
      borderBottom: "3px solid black",
      '& span': { fontSize: "15px" },
      '& a': {
          margin: "auto auto",
          fontSize: "large",
          color: "black",
          fontFamily: "Arial, Helvetica, sans-serif",
          textDecoration: "none"}
      },
    footer: {
      gridArea: "footer",
      display: "flex",
      width: "90%",

      margin: "0 auto 0 auto",
      borderTop: "2px solid black"
    },
  center:{ 
      display: "flex",
      width: "fit-content",
      margin: ".5% auto",
      '& a':{
          textDecoration: "none",
          fontSize: "large",
          margin: "auto 35px",
          color: "black"
  }},
    wood: {
      index:'-1',
    },
})

export const Who_We_Are = (props:Props) => {
    const classes = useStyles();
    return (
      <html>
        <div className="container">
              <div className={classes.NavTop}>
         <img className={classes.sampleimage} src={placeholder}/>
         <img className={classes.loginbutton} src={login}/>
    </div>
    <div className={classes.NavUnder}>
           <a href='Who_We_Are'> Who We Are</a>
          <span>｜</span>
          <a href='/What_We_Do'> What We Do</a>
          <span>｜</span>
          <a href='/'> News and Events</a>
          <span>｜</span>
          <a href='/Where_We_Work'> Where We Work</a>
          <span>｜</span>    
          <a href='/Contact_Us'> Contact Us </a>
      </div> 
            <div className={classes.body}>
                <div className={classes.middle}>
                <img className={classes.responsive} src={trees}/> 
                    <h3>Welcome to our website</h3>
                    <p>It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.</p>
                </div>
                <div className={classes.sidebar_right}>
                <h3 className={classes.newsfeed}>NEWS FEED</h3> The FIRST ORDER reigns. <br /> 
                Only General Leia Organa's
                band of RESISTANCE fighters
                stand against the rising
                tyranny, certain that Jedi
                Master Luke Skywalker will
                return and restore a spark of
                hope to the fight. <br /> 
                But the Resistance has been
                exposed. As the First Order
                speeds toward the rebel base,
                the brave heroes mount a
                desperate escape.… <br />
                the last jedi <br /> 
                Only General Leia Organa's
                band of RESISTANCE fighters
                stand against the rising
                tyranny, certain that Jedi
                Master Luke Skywalker will
                return and restore a spark of
                hope to the fight. <br /> 
                But the Resistance has been
                exposed. As the First Order
                speeds toward the rebel base,
                the brave heroes mount a
                desperate escape.… <br />
                Republic, Supreme Leader Snoke <br /> 
                Only General Leia Organa's
                band of RESISTANCE fighters
                stand against the rising
                tyranny, certain that Jedi
                Master Luke Skywalker will
                return and restore a spark of
                hope to the fight. <br /> 
                But the Resistance has been
                exposed. As the First Order
                speeds toward the rebel base,
                the brave heroes mount a
                desperate escape.… <br />
                now deploys his merciless <br /> 
                Only General Leia Organa's
                band of RESISTANCE fighters
                stand against the rising
                tyranny, certain that Jedi
                Master Luke Skywalker will
                return and restore a spark of
                hope to the fight. <br /> 
                But the Resistance has been
                exposed. As the First Order
                speeds toward the rebel base,
                the brave heroes mount a
                desperate escape.… <br />
                legions to seize military <br /> 
                Only General Leia Organa's
                band of RESISTANCE fighters
                stand against the rising
                tyranny, certain that Jedi
                Master Luke Skywalker will
                return and restore a spark of
                hope to the fight. <br /> 
                But the Resistance has been
                exposed. As the First Order
                speeds toward the rebel base,
                the brave heroes mount a
                desperate escape.… <br />
                control of the galaxy. <br /> 
                Only General Leia Organa's
                band of RESISTANCE fighters
                stand against the rising
                tyranny, certain that Jedi
                Master Luke Skywalker will
                return and restore a spark of
                hope to the fight. <br /> 
                But the Resistance has been
                exposed. As the First Order
                speeds toward the rebel base,
                the brave heroes mount a
                desperate escape.… <br />
                
                </div>
                <div className={classes.sidebar_text}>
                <h5>Bantha, Zoo, &amp; Adds, P.C.</h5>
                <p className="address">101 West Tatooine Street, Suite 2187 <br />
                Mos Eisley, Tatooine 12345 <br />
                555-555-5555 (Phone) <br />
                555-555-5555 (Fax) <br />
                </p>
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.center}>
                    <a href='Who_We_Are'> Who We Are</a>
                    <span>&#9135;</span>
                    <a href='/What_We_Do'> What We Do</a>
                    <span>&#9135;</span>
                    <a href='/'> News and Events</a>
                    <span>&#9135;</span>
                    <a href='/Where_We_Work'> Where We Work</a>
                    <span>&#9135;</span>
                    <a href='/Contact_Us'> Contact Us </a>
                </div>
            </div>  
    </div> 
    </html>   
    )
    }

    