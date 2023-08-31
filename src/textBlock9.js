import React  from 'react';

import './App.css';

function TextBlock9() {
   


    return (
        
        <div id="textblock9">
            <div id="textblock-container">
                <h1 id="textblock-title"> Adam Novak</h1>
                <p id="textblock-content">
                Adam Novak is the author of the novels Rat Park, The Non-Pro, Freaks of the Industry, and Take Fountain. 
                He divides his time between Beachwood Canyon and Fort Washington, Maryland.
                 </p>     
                 
          
                     <a href="mailto:anovak@icloud.com" target="_blank">
                            <button class="btn">
                                       <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                         <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                                         <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                                       </svg>
                                       <span>Coffee?</span><span>Email Me</span>
                                     </button>
                                </a>
                         
                          
            </div>
            
                        
                        
                        
            
            <h3 className="content__index">09</h3>

        </div>
    );
}

export default TextBlock9;