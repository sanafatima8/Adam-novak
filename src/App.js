


import "./App.css";
import { Parallax } from 'react-parallax';

import ratPark1 from "./images/ratPark1.jpg";
import nonPro from './images/nonPro.jpg'
import take_fountain from './images/take_fountain.jpg'
import freaks_of_the_industry from './images/freaks_of_the_industry.jpg'
import rat_park_audio_book from './images/rat_park_audio_book.jpg'
import excerpts from './images/excerpts.png'
import podcast from './images/podcast.png'
import rat_park_shirt from './images/rat_park_shirt.png'
import Adamnovak2 from './images/Adamnovak2.png'


import TextBlock1 from './textBlock1';
import TextBlock2 from './textBlock2';
import TextBlock3 from './textBlock3';
import TextBlock4 from "./textBlock4";
import TextBlock5 from "./textBlock5";
import TextBlock6 from "./textBlock6";
import TextBlock7 from "./textBlock7";
import TextBlock8 from "./textBlock8";
import TextBlock9 from "./textBlock9";

function App() {
  return (
    <div className="App">
      <Parallax className='img' strength={100} bgImage={ratPark1}>
        <div className="content">
          <div className="text-content"></div>
        </div>
        <TextBlock1 />
      </Parallax>
      <Parallax className='img' strength={100} bgImage={nonPro}>
        <div className="content">
          <div className="text-content"></div>
        </div>
      </Parallax>
      <TextBlock2 />
      <Parallax className='img' strength={100} bgImage={take_fountain}>
        <div className="content">
          <div className="text-content"></div>
        </div>
      </Parallax>
      <TextBlock3 />
      <Parallax className='img' strength={100} bgImage={freaks_of_the_industry}>
        <div className="content">
          <div className="text-content"></div>
        </div>
      </Parallax>
      <TextBlock4 />
      <Parallax className='img' strength={100} bgImage={rat_park_audio_book}>
        <div className="content">
          <div className="text-content"></div>
        </div>
      </Parallax>
      <TextBlock5 />
      <Parallax className='img' strength={100} bgImage={excerpts}>
        <div className="content">
          <div className="text-content"></div>
        </div>
      </Parallax>
      <TextBlock6 />
      <Parallax className='img' strength={100} bgImage={podcast}>
        <div className="content">
          <div className="text-content"></div>
        </div>
      </Parallax>
      <TextBlock7 />
      <Parallax className='img' strength={100} bgImage={rat_park_shirt}>
        <div className="content">
          <div className="text-content"></div>
        </div>
      </Parallax>
      <TextBlock8 />
      <Parallax className='img1' strength={100} bgImage={Adamnovak2}>
        <div className="content">
          <div className="text-content"></div>
        </div>
      </Parallax>
      <TextBlock9 />



      </div>  
 
  );
}

export default App;
