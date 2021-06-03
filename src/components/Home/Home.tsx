import React from 'react';
import placeholder from '../../assets/images/Imagefile.png'
import login from '../../assets/images/login.png'
import { makeStyles } from '@material-ui/core';
import Grogu from '../../assets/images/Grogu-iPhone-wallpaper-idownloadblog-funksolbrotherr.jpeg';

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
  grogu: {
    height: "50%",
    width: "100%",
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
  }); 

export const Home = (props:Props) => {  
    // Create our classes variable
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
      <img className={classes.grogu} src={Grogu}/>
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