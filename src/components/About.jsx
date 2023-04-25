import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio expedita voluptatibus officiis rem? Porro quas optio minima reprehenderit repellendus quia facilis deleniti a, dolore odit, ullam nisi debitis amet quasi!</p>
            <button>{props.button}</button>
        </div>

    </div>
  )
}

export default About;