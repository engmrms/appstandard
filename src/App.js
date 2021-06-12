
import './App.css';
import Form from './components/Form/Form';
import logger from './utilities/log';
logger.init();

function App() {
     //throw new Error("Woops !!!!!!!!!!");
  //console.log("test tstst gh");
  try {
    throw new Error("Woops !!!!!!!!!!");
  } catch (error) {
     console.error(error)
  }
  

    // fetch('https://123456jsonplaceholder.typicode.com/todos/55555555551')
    //   .then(response => response.json())
    //   .then(json => json).catch(err=>console.error(err));
 
  return <Form/>;
}

export default App;
