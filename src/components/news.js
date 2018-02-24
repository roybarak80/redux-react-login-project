import React from 'react';
var loremIpsum = require('lorem-ipsum')
  , output     = loremIpsum();
output = loremIpsum({
    count: 100                    // Number of words, sentences, or paragraphs to generate. 
  , units: 'words'            // Generate words, sentences, or paragraphs. 
  , format: 'html'               // Plain text or html 
               
});
export default () => {

   
        return (
            <div className="jumbotron">
        <h1>News ff</h1>
        <p>{output}</p>
       
      </div>
        );
    
};