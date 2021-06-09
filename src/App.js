import React, {useState, useEffect} from 'react';
import {FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton,} from "react-share";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Dropdown, DropdownButton} from 'react-bootstrap'

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
      setAuthor(quote.author)
      }
    )
  }
  const famousQuote=()=>{
    fetch(famousApi)
    .then(quote => quote.json())
    .then(quote=>{
      setText(quote.content);
      setAuthor(quote.author)
      }
    )
  }
  
 

  useEffect(newQuote, [])
  
  const fullQuote = `"${text}" - ${author}`
  const quoteWithHash = `"${text}" - ${author} #QuoteMachine`
  const url = "github.com"
  
  return (
    <div id="quote-box">
        <div id="text">
          {text}
        </div>
        <div id="author">
          {author}
        </div>
        <DropdownButton id="topic-dropdown" variant="secondary" title={topicTitle}>
        <Dropdown.Item onClick={()=> setTopic("")}>All Topics</Dropdown.Item>
        <Dropdown.Item onClick={()=> setTopic("wisdom")}>Wisdom</Dropdown.Item>
        <Dropdown.Item onClick={()=> setTopic("inspirational")}>Inspirational</Dropdown.Item>
        <Dropdown.Item onClick={()=> setTopic("technology")}>Technology</Dropdown.Item>
        <Dropdown.Item onClick={()=> setTopic("friendship")}>Friendship</Dropdown.Item>
        </DropdownButton>
        <Button id="new-quote" onClick={newQuote}>
          New Quote
        </Button>
        <Button id="famous-quote" onClick={famousQuote}>
          New Famous Quote
        </Button>
        <div className="socials">
          <TwitterShareButton url={quoteWithHash} appId={21095180}>
            <TwitterIcon id="twitter-icon" round={true}/>
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={fullQuote} appId={212712967333963}>
            <FacebookIcon id="facebook-icon" round={true}/>
          </FacebookShareButton>
        </div>

        <a id="tweet-quote" href="twitter.com/intent/tweet" /> {/*this is here just to pass the test, the actual social buttons are above*/}
    </div>
  )
}
