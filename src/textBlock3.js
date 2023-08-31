import React, { useState, useEffect } from 'react';

import './App.css';

function TextBlock3() {
    const quotes = [
        {
            quote: "\"The craziest goddamn thing I've read in a long time.\"",
            author: "Alexander Payne",
            affiliation: "Academy-Award winning writer/director of Sideways and The Descendants"
        },
        // ... Add other quotes ...
    ];

    const [quoteIndex, setQuoteIndex] = useState(0);
    const [quoteOffset, setQuoteOffset] = useState(0);
    const [forwards, setForwards] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                if (quoteOffset >= quotes[quoteIndex].quote.length) {
                    setForwards(false);
                } else {
                    setQuoteOffset(quoteOffset + 1);
                }
            } else {
                if (quoteOffset === 0) {
                    setForwards(true);
                    setQuoteIndex((quoteIndex + 1) % quotes.length);
                } else {
                    setQuoteOffset(quoteOffset - 1);
                }
            }
        }, 70);

        return () => {
            clearInterval(interval);
        };
    }, [quoteIndex, quoteOffset, forwards]);

    const currentQuote = quotes[quoteIndex];
    const animatedQuote = currentQuote.quote.substr(0, quoteOffset);




    return (
        
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title"> Adam Novak</h1>
                <p id="textblock-content">
                A podcast transcript is turned in to a small publishing house in Los Angeles. 
                It turns out to be a piece of missing evidence in a murder investigation that ran cold. 
                Take Fountain is the reprinting of that transcript, 
                and only by reading the entire conversation can the murder be solved. 
                 </p>
                 <p id="textblock-content">Take Fountain is a truly unique novel that slowly simmers to boil as an interview
                     between two filmmakers gives hints to the anatomy of a brutal murder.
                     </p>
              
            </div>
                     <div class="frame">
                                <a href="https://a.co/d/0p21mCR" target="_blank">
                                <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>HOVER ME</span>
      </button>
                                </a>
                            </div>
                            
                            <br/>
                            <div className="quotes">
                <p className="quote">{animatedQuote}</p>
                <p className="author">~ {currentQuote.author}</p>
                <p className="affiliation">{currentQuote.affiliation}</p>
            </div>
            <h3 className="content__index">03</h3>

        </div>
    );
}

export default TextBlock3;