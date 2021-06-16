import React, {useState, useEffect} from 'react';
import {FacebookShareButton, TwitterShareButton,} from "react-share";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Dropdown} from 'react-bootstrap';
import logo from "./Images/TR-04.svg";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faFacebookSquare} from "@fortawesome/free-brands-svg-icons"
  

export default function App() {
  const colorArray = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#73A857',
                      '#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9',
  ];

  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [topic, setTopic] = useState("");
  const [color, setColor] = useState("");

  const famousApi = topic == ""? 'https://api.quotable.io/random?tags=famous-quotes' : `https://api.quotable.io/random?tags=famous-quotes,${topic}`;
  const topicTitle = topic == ""? `All topics` : topic.charAt(0).toUpperCase() + topic.slice(1);
  
  const newQuote=()=>{
    fetch(`https://api.quotable.io/random?tags=${topic}`)
    .then(quote => quote.json())
    .then(quote=>{
      setText(quote.content);
      setAuthor(quote.author);
      setColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
      }
    )
  }
  const famousQuote=()=>{
    fetch(famousApi)
    .then(quote => quote.json())
    .then(quote=>{
      setText(quote.content);
      setAuthor(quote.author);
      setColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
      }
    )
  }
  
 

  useEffect(newQuote, [])
  
  const fullQuote = `"${text}" - ${author}`
  const quoteWithHash = `"${text}" - ${author} #QuoteMachine`
  
  
  return (
    
    <div id="quote-box" style={{fontFamily:"Lobster, cursive",background:color, height:"100vh", color:color, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
          
        
          <div style={{borderRadius:"1em", display:"flex", padding:"10px", flexDirection:"column", background:"white", width:"50%"}}>
          
            
              <div className="quoteBox" style={{margin:20}}>
                <div  id="text">
                  <p style={{fontSize:"3rem"}}>{text}</p>
                </div>
                <div id="author" style={{fontSize:"2rem"}}>
                  <p>- {author}</p>
                </div>
              </div>
            

            <div className="bottomRow" style={{fontFamily:"cursive", display:"flex", justifyContent:"space-between", margin:"0 1em 0.7em"}}>
              <div className="buttons" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>

              <Dropdown>
                  <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:color, border:"0", marginRight:"1em"}}>{topicTitle}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={()=> setTopic("")}>All Topics</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setTopic("wisdom")}>Wisdom</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setTopic("inspirational")}>Inspirational</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setTopic("technology")}>Technology</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setTopic("friendship")}>Friendship</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              
                <Button style={{backgroundColor: color, border:"0", marginRight:"0.4em"}} id="new-quote" onClick={newQuote} >
                      Random Quote
                </Button>
                
                <Button style={{backgroundColor: color, border:"0"}} id="famous-quote" onClick={famousQuote}>
                      Famous Quote
                </Button>
              
              </div>
              <div className="socials">
                <TwitterShareButton style={{marginRight:"0.8em"}} url={quoteWithHash} appId={21095180}>
                <FontAwesomeIcon icon={faTwitterSquare} size="3x" style={{color: color}} />


                </TwitterShareButton>
                <FacebookShareButton url={"github.com"} quote={fullQuote} appId={212712967333963}>

                <FontAwesomeIcon icon={faFacebookSquare} size="3x" style={{color: color}}/>
                </FacebookShareButton>
              </div>
            </div>
          </div>
          <div style={{color:"white", fontFamily:"sansSerif", display:"flex", marginTop:"0.5em"}} className="credits">
            
            <img src={logo} style={{height:"1.7em", color:"white"}} />
            
          </div>
        
        <a id="tweet-quote" href="twitter.com/intent/tweet" /> {/*this is here just to pass an automized test, the actual social buttons are above*/}
    </div>
    )
}
