import Header from './header';
import Content from './content';
import Footer from './footer';

import { useState } from 'react';

let time = new Date().toLocaleTimeString();
console.log('Time', time)

function ContentLogged() {

    var isDone = false;
    const terminado = {textDecoration: "line-through"};

    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);
    function UpdateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    const [headingText, setHeadingText] = useState("Valor incial");
    function HandleClick() {
        setHeadingText("Submited");
    }

    return(      
        <div>
            <Header />
            <Content />
            <h1>{time}</h1>
            <div>
                <h3>{headingText}</h3>
                <button onClick={HandleClick}>Event Handling</button>
            </div>
            <button onClick={UpdateTime}>Actualizar tiempo</button>
            <p style = {isDone ? terminado : null}>Comprar bolis</p>
            <Footer />
        </div>
      )
  };

  export default ContentLogged;