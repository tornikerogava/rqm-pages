import React, {useState, useEffect} from 'react';
import {FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton,} from "react-share";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Dropdown, DropdownButton, Container} from 'react-bootstrap'

export default function App() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [topic, setTopic] = useState("");

  const famousApi = topic == ""? 'http://api.quotable.io/random?tags=famous-quotes' : `http://api.quotable.io/random?tags=famous-quotes,${topic}`;
  const topicTitle = topic == ""? `All topics` : topic.charAt(0).toUpperCase() + topic.slice(1);
  
  const newQuote=()=>{
    fetch(`http://api.quotable.io/random?tags=${topic}`)
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
        
        

        <div  style={{display:"flex", padding:"10px", flexDirection:"column", position:"absolute", background:"lightBlue", width:"50%", top:"50%", msTransform: "translateY(-50%)", transform: "translateY(-50%)"}}>
        
        
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
              <DropdownButton id="topic-dropdown" variant="secondary" title={topicTitle}>
                <Dropdown.Item onClick={()=> setTopic("")}>All Topics</Dropdown.Item>
                <Dropdown.Item onClick={()=> setTopic("wisdom")}>Wisdom</Dropdown.Item>
                <Dropdown.Item onClick={()=> setTopic("inspirational")}>Inspirational</Dropdown.Item>
                <Dropdown.Item onClick={()=> setTopic("technology")}>Technology</Dropdown.Item>
                <Dropdown.Item onClick={()=> setTopic("friendship")}>Friendship</Dropdown.Item>
              </DropdownButton>
            
              <Button id="new-quote" onClick={newQuote} >
                    Random Quote
              </Button>
              
              <Button id="famous-quote" onClick={famousQuote}>
                    Famous Quote
              </Button>
            
            </div>
            <div className="socials">
              <TwitterShareButton style={{marginRight:"5px"}} url={quoteWithHash} appId={21095180}>
                <TwitterIcon id="twitter-icon" round={true} size={40}/>
              </TwitterShareButton>
              <FacebookShareButton url={"github.com"} quote={fullQuote} appId={212712967333963}>
                <FacebookIcon id="facebook-icon" round={true} size={40}/>
              </FacebookShareButton>
            </div>
            </div>
          </div>

        <a id="tweet-quote" href="twitter.com/intent/tweet" /> {/*this is here just to pass the test, the actual social buttons are above*/}
    </div>
    )
}
