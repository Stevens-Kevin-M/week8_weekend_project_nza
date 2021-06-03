import React from 'react';
import { makeStyles } from '@material-ui/core';
import placeholder from '../../assets/images/Imagefile.png'
import login from '../../assets/images/login.png'
import Subrogation from '../../assets/images/sub-02-subrogation.jpg'
import Litigation from '../../assets/images/sub-02-litigation.jpg'
import Business from '../../assets/images/sub-02-business.jpg'
import Transportation from '../../assets/images/sub-02-warehouse.jpg'
import Attorneys from '../../assets/images/content-navlink-attorneys.jpg'
import redBar from '../../assets/images/nav_side_sub.jpg'

interface Props{
    title: string
}

const useStyles = makeStyles({
    root: {
      margin: "0",
      padding: "0",
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
      },
    },
    body: {
      gridArea: "body",
      width: "90%",
      margin: "10px auto 10px auto",
      display: "grid",
      gridTemplateColumns: "25% 75% ",
      gridTemplateRows: "20% 40% 40%",
      gridTemplateAreas:
        '"sidebarleft paragraph  "\r\n "sidebarleft image "\r\n "sidebarleft image "\r\n'
    },

  sidebar_left: {
      gridArea: "sidebarleft",
      backgroundImage: `url(${redBar})`,
      padding: "20px",
      color: "white",
      marginBottom: "10px",
      marginRight: "10px",
      backgroundColor: "rgb(153, 23, 45)",
      justifyContent: "center",
      borderBottom: "1px black",
      fontSize: '15px',
      '& h2': { borderBottom: "3px solid white" },
    },
  
  paragraph:{
      marginLeft:"20px"
  },

  image: { 
      marginLeft:"20px",
      gridArea: "image",
      padding: "0 10px 0 0",
      width: "100%",
      borderBottom: "1px black",
      '& img':{
          width:"45%",
          height:"150px",    
      }},

  Subrogation:{
      margin:"0 10px 10px 0"
      },

  Litigation:{
      margin:"0 10px 10px 0"
      },

  Business:{
      margin:"0 10px 0 0"
      },

  Transportation:{
      margin:"0 10px 0 0"
      },

  right:{
      marginLeft:"20px",
      marginTop:"2px"
  },
  BusinessTwo: {
      border: "2px white",
      marginLeft: "auto",
      marginRight: "auto"
    },
  Attorney: {
    border: "2px white",
    marginLeft: "auto",
    marginRight: "auto",
    width: '90%'
    }
  });

     
export const What_We_Do = (props:Props) => {  
    const classes = useStyles();
        
    return (
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
                <div className={classes.sidebar_left}>
                    <h2>WHAT WE DO</h2>
                    <p className="title">Subrogation</p>
                        <p className={classes.right}>Property</p>
                        <p className={classes.right}>Worker's Comp</p>
                        <br/>

                    <p className="title">Litigation</p>
                        <p className={classes.right}>Appeliate</p>
                        <p className={classes.right}>Commercial</p>
                        <p className={classes.right}>Defense</p>
                        <p className={classes.right}>Labor/Employment</p>
                        <br/>

                    <p className="title">Business</p>
                        <p className={classes.right}>Brokerage Agreement</p>
                        <p className={classes.right}>Business Formation</p>
                        <p className={classes.right}>Contracts</p>
                        <p className={classes.right}>Property</p>
                        <p className={classes.right}>Labor/Employment</p>
                        <br/>

                    <p className="title">Transportation</p>
                        <p className={classes.right}>Brokerage Agreement</p>
                        <p className={classes.right}>Business Formation</p>
                        <br/>
                    <img className={classes.Attorney} src={Attorneys}/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>   
                <div className={classes.image}>
                    <img className={classes.Subrogation} src={Subrogation} alt="Dramatic Firefighter"/>
                    <img className={classes.Litigation} src={Litigation} alt="Business Casual"/>
                    <br/>
                    <img className={classes.Business} src={Business} alt="Aggressive Writing"/>
                    <img className={classes.Transportation} src={Transportation} alt="Autobots Rollout"/>
                </div>
                <div className={classes.paragraph}>
                    <p>
                      Episode IV
                      A NEW HOPE
                      It is a period of civil war.
                      Rebel spaceships, striking
                      from a hidden base, have won
                      their first victory against
                      the evil Galactic Empire.

                      During the battle, Rebel
                      spies managed to steal secret
                      plans to the Empire's
                      ultimate weapon, the DEATH
                      STAR, an armored space
                      station with enough power to
                      destroy an entire planet.

                      Pursued by the Empire's
                      sinister agents, Princess
                      Leia races home aboard her
                      starship, custodian of the
                      stolen plans that can save
                      her people and restore
                      freedom to the galaxy.…
                      Episode V
                      THE EMPIRE STRIKES BACK
                      It is a dark time for the
                      Rebellion. Although the Death
                      Star has been destroyed,
                      Imperial troops have driven the
                      Rebel forces from their hidden
                      base and pursued them across
                      the galaxy.

                      Evading the dreaded Imperial
                      Starfleet, a group of freedom
                      fighters led by Luke Skywalker
                      has established a new secret
                      base on the remote ice world
                      of Hoth.

                      The evil lord Darth Vader,
                      obsessed with finding young
                      Skywalker, has dispatched
                      thousands of remote probes into
                      the far reaches of space.… </p>
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
     )
}