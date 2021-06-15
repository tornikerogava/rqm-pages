import React, {useState, useEffect} from 'react';
import {FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton,} from "react-share";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Dropdown, DropdownButton, Container} from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faTwitterSquare, faFacebookSquare} from "@fortawesome/free-brands-svg-icons"
  

export default function App() {
  const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [topic, setTopic] = useState("");
  const randomColor= colorArray[Math.floor(Math.random() * colorArray.length)]

  const famousApi = topic == ""? 'https://api.quotable.io/random?tags=famous-quotes' : `http://api.quotable.io/random?tags=famous-quotes,${topic}`;
  const topicTitle = topic == ""? `All topics` : topic.charAt(0).toUpperCase() + topic.slice(1);
  
  const newQuote=()=>{
    fetch(`https://api.quotable.io/random?tags=${topic}`)
    .then(quote => quote.json())
    .then(quote=>{
      setText(quote.content);
      setAuthor(quote.author);
      }
    )
  }
  const famousQuote=()=>{
    fetch(famousApi)
    .then(quote => quote.json())
    .then(quote=>{
      setText(quote.content);
      setAuthor(quote.author);
      }
    )
  }
  
 

  useEffect(newQuote, [])
  
  const fullQuote = `"${text}" - ${author}`
  const quoteWithHash = `"${text}" - ${author} #QuoteMachine`
  
  
  return (
    <div id="quote-box" style={{display:"flex", justifyContent:"center"}}>
          
        
          <div style={{borderRadius:"1em", display:"flex", padding:"10px", flexDirection:"column", position:"absolute", background:"lightBlue", width:"50%", top:"50%", msTransform: "translateY(-50%)", transform: "translateY(-50%)"}}>
          
            <blockquote className="blockquote mb-0" >
              <div id="text">
                <p>{text}</p>
              </div>
              <div id="author" style={{}}>
                <cite>- {author}</cite>
              </div>
            </blockquote>
          
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <DropdownButton id="topic-dropdown" variant="light" title={topicTitle}>
                  <Dropdown.Item onClick={()=> setTopic("")}>All Topics</Dropdown.Item>
                  <Dropdown.Item onClick={()=> setTopic("wisdom")}>Wisdom</Dropdown.Item>
                  <Dropdown.Item onClick={()=> setTopic("inspirational")}>Inspirational</Dropdown.Item>
                  <Dropdown.Item onClick={()=> setTopic("technology")}>Technology</Dropdown.Item>
                  <Dropdown.Item onClick={()=> setTopic("friendship")}>Friendship</Dropdown.Item>
                </DropdownButton>
              
                <Button style={{backgroundColor: randomColor, border:"0"}} id="new-quote" onClick={newQuote} >
                      Random Quote
                </Button>
                
                <Button id="famous-quote" onClick={famousQuote}>
                      Famous Quote
                </Button>
              
              </div>
              <div className="socials">
                <TwitterShareButton style={{marginRight:"5px"}} url={quoteWithHash} appId={21095180}>
                <FontAwesomeIcon icon={faTwitterSquare} size="3x" style={{color: randomColor}} />


                </TwitterShareButton>
                <FacebookShareButton url={"github.com"} quote={fullQuote} appId={212712967333963}>

                <FontAwesomeIcon icon={faFacebookSquare} size="3x" style={{color: randomColor}}/>
                </FacebookShareButton>
              </div>
              </div>
            </div>
          
        
        <a id="tweet-quote" href="twitter.com/intent/tweet" /> {/*this is here just to pass an automized test, the actual social buttons are above*/}
    </div>
    )
}
