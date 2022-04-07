import React, { useEffect, useState } from "react";
import {
  FileCopy as FileCopyIcon,
  Refresh as RefreshIcon,
} from "@material-ui/icons";
import axios from "axios";
import styled from "styled-components";

const RQMStyle = styled.div``;

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
      <div>
        {quote.content}- {quote.author}
      </div>

      <div>
        {quoteCopied ? (
          <p>Quote copied to Clipboard</p>
        ) : (
          <i aria-label='copy-icon' onClick={copyQuote}>
            <FileCopyIcon />
          </i>
        )}
      </div>
      <div>
        <i aria-label='copy-icon' onClick={getRandomQuote}>
          <RefreshIcon />
        </i>
      </div>
    </RQMStyle>
  );
}
