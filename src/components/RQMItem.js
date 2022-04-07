import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const RQMStyle = styled.div`
  .RQMItem__info {
    margin-top: 3rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    min-height: 425px;
  }
  .RQMItem__author {
    font-size: 2.2rem;
    color: var(--highlight);
    margin-top: 1rem;
    text-align: center;
  }
  .RQMItem__content {
    font-size: 2.2rem;
    text-align: justify;
    padding: 1.33rem;
    font-family: "RobotoMono Regular";
  }
  .RQMItem__tools {
    font-size: 1.3rem;
    font-family: "RobotoMono Regular";
    margin-bottom: 3rem;
    margin-top: 1rem;
    color: #7aa7b2;
    display: flex;
    align-content: flex-end;
    justify-content: space-around;
  }
  .icon {
    color: var(--red);
    font-size: 3rem;
    text-align: center;
    pointer: cursor;
  }

  button {
    font-size: 1.5rem;
    background-color: var(--deep-dark);
    padding: 0.7rem 0.7rem;
    border-radius: 8px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: var(--gray-1);
    cursor: pointer;
  }
  button:hover {
    color: var(--red);
  }
  .btn {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
    button {
      font-size: 1.3rem;
      margin: 0.5rem;
    }
    .btn {
      font-size: 1.5rem;
    }
  }
`;

export default function RQMItem() {
  const [quote, setQuote] = useState({});
  const [quoteCopied, setQuoteCopied] = useState(false);

  useEffect(() => {
    getRandomQuote();
  }, []);

  async function getRandomQuote() {
    setQuoteCopied(false);
    const quoteObject = await axios.get("https://api.quotable.io/random");
    setQuote(quoteObject.data);
  }

  function copyQuote() {
    navigator.clipboard.writeText(quote.content + " - " + quote.author);
    setQuoteCopied(true);
  }

  return (
    <RQMStyle>
      <div className='RQMItem__info'>
        <div className='RQMItem__tools'>
          {quoteCopied ? (
            <p className='copied'>Copied!</p>
          ) : (
            <button onClick={copyQuote} outline='true'>
              Copy to Clipboard
            </button>
          )}
          <button onClick={getRandomQuote} className='btn'>
            New Quote
          </button>
          <a
            href='https://twitter.com/intent/tweet'
            target='_new'
            id='tweet-quote'
          >
            <i class='fa-brands fa-twitter-square'></i>
            <button>Tweet this Quote</button>
          </a>
        </div>
        <p className='RQMItem__content'>"{quote.content}"</p>
        <h3 className='RQMItem__author'>{quote.author}</h3>
      </div>
    </RQMStyle>
  );
}
