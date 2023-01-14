import './App.css';
import Prop from './components/Prop';

function App() {
  const doThing =(num) =>{
    for(let i=0; i < num; i++){
      console.log("you pressed the div!!!")
    }
  }

  return (
    <>
      <Prop firstName="Jane" lastName="Doe," age="45" color="Black"/>
      <Prop firstName="Smith" lastName="John" age="88" color="Brown"/>
      <Prop firstName="Fillmore" lastName="Millard" age="50" color="Brown"/>
      <Prop firstName="Smith" lastName="Maria" age="62" color="Brown"/>
      

      {/* <div>
        <marquee>HELOOOOOOOO!</marquee>
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul>
            <li>Learn React</li>
            <li>Climb Mt. Everest</li>
            <li>Run a marathon</li>
            <li>Feed the dogs</li>
        </ul>  
      </div> */}
    </>
  );
}

export default App;
