import React, { useState, useEffect } from 'react';

import './App.css';

function TextBlock4() {
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
                In the tradition of Mark Z. Danielewski's House of Leaves and P.T. Anderson's Magnolia, Adam Novak explores the city of angels and demons in his third novel Freaks of the Industry.
                <br/>
                Studio executive Rodney Muir quits the business after a prostitution scandal and returns home to Washington, DC where he falls for two women, the unhappy wife of a diplomat who harbors a dark secret and a federal agent investigating a Starbucks triple homicide who uncovers a White House conspiracy that threatens them all.
                <br/>
                {/* Low-budget horror filmmaker Thor Rosenthal gets a shot at the big time when homeless junkie turned Oscar-winning movie star Antwon Legion agrees to star in his desert thriller about a carpenter named Jesus investigating a serial killer stalking Mary Magdalene in Golgotha. The only problem is the movie star playing the messiah might be the Anti-Christ.
                <br/>
                Larry Mersault works at the oldest talent agency in Hollywood as the script reader for Antwon Legion. Juggling the insatiable daughter of the agency chairman with endless script coverage requests, Larry is ordered to assassinate Legion by the chairman and break up with his daughter, forced choose between a career he loves and the people he loves the most. */}
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
            <h3 className="content__index">04</h3>

        </div>
    );
}

export default TextBlock4;