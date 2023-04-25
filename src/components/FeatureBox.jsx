import React from 'react';

function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt='abcde'/>
        </div>
        <div className='s-b-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam voluptas unde aut illo quaerat eius fugit id, culpa harum veniam. Dolor, odio minus accusamus qui at nemo blanditiis officiis deleniti!</p>
        </div>

    </div>
  )
}

export default FeatureBox;