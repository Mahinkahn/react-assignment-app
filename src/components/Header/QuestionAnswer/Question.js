import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-section mt-4 col-8'>
            <h5 className='question d-block'>How Dose React Work?</h5>
            <p className='answer'>
                React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
            <h5 className='question'>Different between props and state</h5>
            <p className='answer'>
                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.
            </p>
            <h5 className='question'>UseEffect used for other than loading data</h5>
            <p className='answer'>
                When we want to perform something after each render of component then we can use the useEffect() hook. By using this Hook, we tell React that our component needs to do something after render by passing a function. React remember the function we passed in useEffect() hook and call it later after performing the DOM updates.

                By default, the useEffect hook runs after the first render and after every update. React updates the DOM by the time it runs the effects.
            </p>

        </div>

    );
};

export default Question;