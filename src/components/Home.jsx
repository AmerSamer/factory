import React from 'react';
import image from './bg.jpg'
import './style.css';

function Home() {
    return (
        <div className='xbody'>
            <div className="image">
                {<div style={{
                    backgroundImage: `url(${image})`,
                    // <img src="https://placeimg.com/640/480/any">
                    // ${i.avatar/${index}}
                    // opacity: 0.1,
                    height: '450px',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <p style={{color: 'white' , fontSize: '35px' , textAlign: 'center' , background: 'black'}}>In our company, everyone deserves a car!</p>
               <p style={{color: 'white' , fontSize: '25px' , textAlign: 'center'}}>And it does not matter if you are on the first day of your work or PZM world.</p>
                
               <p style={{color: 'white' , fontSize: '20px' , textAlign: 'center'}}>The Juniors workers will get great vehicles, opposite, the Seniors workers among us will get great luxury cars.</p>
               <p style={{color: 'white' , fontSize: '15px' , textAlign: 'center'}}>And all this to give you a new employee a chance for a small taste of where you can aspire in our company. <br/>And what does it take to move forward? Be great :)</p></div>}
                
            </div>
        </div>
    );
}

export default Home;