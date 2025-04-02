
import './App.css';
import MapList from './MapList';
import Jsx from './Jsx';
import Form from './Form';
import FavoriteColor from './FavoriteColor';
import SetTime from './SetTime';
function App() {
  return (
    <div className="App">
     <MapList />
     <hr/>
     <Jsx/> 
     <hr/>
     <br/>
     <Form/>
     <br/>
     <hr/>
    <FavoriteColor />
    <hr/>
    <SetTime/>
    </div>
  );
}

export default App;
