import React from 'react';
import { makeStyles } from '@material-ui/core';
import placeholder from '../../assets/images/Imagefile.png'
import login from '../../assets/images/login.png'
import ComputerGuy from '../../assets/images/content-navlink-career.jpg'
import redBar from '../../assets/images/nav_side.jpg'


interface Props{
    title: string;
}

const useStyles = makeStyles({
    body: {
        gridArea: "body",
        width: "90%",
        margin: "10px auto 0 auto",
        display: "grid",
        gridTemplateColumns: "25% 60% 15%",
        gridTemplateRows: "25% 75%",
        gridTemplateAreas:
          '"sidebar paragraph paragraph "\r\n    "sidebar stateTable internationalTable"'
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
        '& span': { 
            fontSize: "larger",
            color: "gray",
            marginTop: "2px" },
        },
    paragraph: { 
        gridArea: "paragraph",
        '& p': { lineHeight: 2, marginBottom: "70px" }
        },
    sidebar: {
        gridArea: "sidebar",
        backgroundImage: `url(${redBar})`,
        backgroundPosition: "center",
        height: "fit-content",
        padding: "20px 0",
        width: "90%",
        color: "white",
        '& h1': {
            borderBottom: "2px solid white",
            margin: "10px auto",
            width: "80%",
            fontWeight: "lighter"
          },
        '& ul': {
            listStyle: "none",
            width: "80%",
            margin: "auto auto",
            paddingLeft: "0",
            '& p': { fontSize: "small", margin: "0 0" },
            '& li':{ margin: "20px 0", paddingLeft: "0",
                "& img": { width: "100%" }
        }
      }
    },
      stateTable: { 
        width: "95%",
        marginTop: "10px",
        gridArea: "stateTable",
        '& th': {
            textAlign: "left",
            fontSize: "large",
            borderBottom: "2px solid rgb(183, 183, 183)",
            padding: "5px 0"
          },
        '& td': { 
            paddingTop: "5px",
            margin: "0 auto"},

        '& tr': { 
            padding: "5px 0 0 0",
            margin: "0 0 0 0"}
        
         },

      internationalTable: { cssFloat: "left", marginTop: "10px", width: "100%" , gridArea: "internationalTable",
      '& th': {
        textAlign: "left",
        fontSize: "large",
        borderBottom: "2px solid rgb(183, 183, 183)",
        padding: "5px 0"
      },
      '& td': { paddingTop: "5px" }
    },

      no_bottom_margin: { marginBottom: "10px" 
    }        
});

export const Where_We_Work = (props:Props) => {
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
    <div className={classes.body}>
        <div className={classes.sidebar}>
            <h1>Where We Work</h1>
            <ul>
                <li>United States</li>
                <li>International</li>
                <li><img src={ComputerGuy}/></li>
                <li className={classes.no_bottom_margin}>Career Opportunities</li>
                <p> Join our magnificent firm</p>
            </ul>                 
        </div>
        <div className={classes.paragraph}>
            <p> Luke Skywalker has returned to
                his home planet of Tatooine in
                an attempt to rescue his
                friend Han Solo from the
                clutches of the vile gangster
                Jabba the Hutt.

                Little does Luke know that the
                GALACTIC EMPIRE has secretly
                begun construction on a new
                armored space station even
                more powerful than the first
                dreaded Death Star.

                When completed, this ultimate
                weapon will spell certain doom
                for the small band of rebels
                struggling to restore freedom
                to the galaxy…</p>
        </div>
        <div>
            <table className={classes.stateTable}>
                    <tr><th colSpan={3}>United States </th></tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                        <td>State</td>    
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                        <td>State</td>    
                    </tr>   
                    <tr>
                        <td>State</td>
                        <td>State</td>
                        <td>State</td>    
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                        <td>State</td>    
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                        <td>State</td>    
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                        <td>State</td>    
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                        <td>State</td>    
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                        <td>State</td>    
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                        <td>State</td>    
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                        <td>State</td>    
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>            
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                                
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>State</td>
                                
                    </tr>
            </table>
        </div>

            <div >
                <table className={classes.internationalTable}>
                    <tr >
                        <th>International</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>Columbia</td>
                        </tr>
                        <tr>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Nicaragua</td>
                        </tr>
                    </tbody>
                </table>
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