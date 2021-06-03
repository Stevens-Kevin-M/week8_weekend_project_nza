import React from 'react';
import {makeStyles} from '@material-ui/core';
import News from '../../assets/images/content-navlink-news.jpg'
import Where from '../../assets/images/content-navlink-where.jpg'
import Rotary from '../../assets/images/content-05-contact.jpg'
import Reputation from '../../assets/images/content-link-reputation.jpg'
import placeholder from '../../assets/images/Imagefile.png'
import login from '../../assets/images/login.png'

interface Props{
    title: string;
}

const useStyles = makeStyles({
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
        '& span': { 
            fontSize: "larger",
            color: "gray",
            marginTop: "2px" },
        },
    body: {
        gridArea: "body",
        width: "90%",
        margin: "10px auto 0 auto",
        display: "grid",
        gridTemplateColumns: "25% 50% 25%", 
        gridTemplateAreas:
          '"sidebar_left main sidebar_right  "'
      },

    sidebar_left: {
        gridArea: "sidebar_left",
        padding: "10px",
        margin: "10px 10px 10px 0",
        height: "90%",
        color: "white",
        backgroundColor: "rgb(153, 23, 45)",
        justifyContent: "center",
        borderBottom: "1px black",
        "& h2": { borderBottom: "3px solid white" },
        "& p":{
            margin: "20px auto 10px auto"
        }
      },

    sidebar_right: {
        gridArea: "sidebar_right",
        padding: "10px 0 0 0",
        margin: "10px auto 10px auto",
        color: "maroon",
        height: "80%",
        backgroundColor: "rgb(219, 212, 201)",
        justifyContent: "center",
        borderBottom: "1px black",
        "& p":{
            margin: "30px auto 20px auto"
        }
      },
    main: {
        gridArea: "main",
        width: "100%",
        height: "80%",
        margin: "10px 10px",
        lineHeight: "15px",

        "& p":{
            margin: "20px auto 0 auto"
      }},
    
    folderpen: {
        border: "2px white",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%"
      },

    right: { fontSize: "20px",margin:"0 10px 0 10px"},

    where_we_work: { fontWeight: "bold", margin:"10px auto 10px auto" },

    whereimage: {
        border: "2px solid black",
        gridArea: "sidebar_right",
        display: "block",
        cssFloat: "left",
        marginLeft: "auto",
        marginRight: "auto",
        width: "85%",
        height: "20%"
    },

    news_and_events: {
        border: "1px solid black",
        gridArea: "sidebar_right",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "85%",
        height: "20%"
    },

    news: { color: "black" },

    rotaryphone: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
        height: "200px",
        marginBottom: "10px"
      },

    pformat: {
        fontSize: "18px",
        margin: "20px 10px 0 0"
      }
})
export const Contact_Us = (props:Props) => {
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
                    <h2>CONTACT US</h2>
                    <p className={classes.right}>Directions/Parking</p>
                    <p className={classes.right}>Career Opportunities</p>
                    <img className={classes.folderpen} src={News} />
                    <p className={classes.right}>News and Events</p>
                    <p className={classes.right}>Join our magnificent firm and do more stuff with us</p>
                </div>
                <div className={classes.sidebar_right}>
                    <img className={classes.whereimage} src={Where} alt="Small Map" />
                    <p className={classes.where_we_work}>Where We Work</p>
                    <p className={classes.where_we_work}>Find out more about our work coverage area</p>
                    <br />
                    <img className={classes.news_and_events} src={Reputation} alt="People Standing Around in Suits" />
                    <p className={classes.news}>Join our magnificent firm and do more stuff with us.</p>
                </div>


                <div className={classes.main}>
                    <img className={classes.rotaryphone} src={Rotary} alt="Picture of Rotary Phone" />
                    <br />
                    <p className={classes.pformat}>The office hours are 6am - 8pm Monday through Friday</p>
                    <br />
                    <p className={classes.pformat}>100 Death Star Way</p>
                    <p className={classes.pformat}>Suite 2187</p>
                    <p className={classes.pformat}>Somewhere, Space 010101</p>
                    <br />
                    <p className={classes.pformat}>PH: 555.555.5555</p>
                    <p className={classes.pformat}>FAX: 555.555.5555</p>
                    <p className={classes.pformat}>Contact Darth Vader at <a href="#">darkside@empire.org</a></p>
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
    )}