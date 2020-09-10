import React from 'react';
import './App.css';
import './calendar.js';

var API_KEY=KEY_HERE;

function NexEvent(){
    getNextEvent().then(function(data){
        let respons = data;
        console.log(data);
    });
}

function Greeting(){
    let d = new Date();
    let hours = d.getHours();
    let day_time = " ";
    if (hours >=5 && hours <10){
        day_time="morgen";
    }
    else if(hours>=10 && hours <17){
        day_time="dag";
    }
    else if(hours>=17 && hours <=23){
        day_time="kveld"
    }
    else if (hours>=0 && hours<5){
        day_time="natt!"
    }
    return <h1 className="Greeting">God {day_time}, Nora!</h1>
}

function Clock(props){
    const[date, setDate] = React.useState(new Date());
    React.useEffect( ()=> {
        let timerID = setInterval( ()=> tick(), 1000);
        return function cleanup(){
            clearInterval(timerID);
        };
    });
    
    function tick() {
        setDate(new Date());
    }

    return <div className="Clock"> {date.toLocaleTimeString()} </div>

}

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <div className="Text-container">
                <Greeting />
                <Clock/>
                <NexEvent/>
          </div>
      </header>
    </div>
  );
}

export default App;
