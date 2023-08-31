import React, { useState, useEffect } from 'react';

import './App.css';

function TextBlock5() {
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
                Enter Rat Park at your own risk. Lose the cage. Find yourself. An L.A. power couple orders an A.I. sex droid to escape their marital prison. What happens to them could happen to you. With his fourth novel, Adam Novak shows us how it takes a village of automatons to augment your humanity, feed your deceptive compulsive sexual addiction, and forget why you ever got married in the first place. 
                 </p>
               
              
            </div>
                     <div class="frame">
                                <a href= "https://a.co/d/a6r7baw " target="_blank">
                                <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Hurry! </span><span>Listen Now</span>
      </button>
                                </a>
                            </div>
                            
                            <br/>
                            <div className="quotes">
                <p className="quote">{animatedQuote}</p>
                <p className="author">~ {currentQuote.author}</p>
                <p className="affiliation">{currentQuote.affiliation}</p>
            </div>
            <h3 className="content__index">05</h3>

        </div>
    );
}

export default TextBlock5;